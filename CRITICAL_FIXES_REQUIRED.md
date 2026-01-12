# Critical Fixes Required

## Overview

This document lists all critical fixes that must be addressed immediately to ensure system stability, data consistency, and proper functionality.

**Last Updated**: 2025-01-24  
**Priority**: 🔴 CRITICAL

---

## 🔴 P0 - Critical (Fix Immediately)

### 1. ExperienceInteraction → UserEvent Creation Missing

**Issue**: Experience interactions don't create UserEvent records, breaking feedback loop  
**Severity**: 🔴 CRITICAL  
**Impact**: Recommendations don't improve from user interactions  
**Location**: `experience_app/views.py:track_interaction()`

**Current Code**:
```python
# In ExperienceViewSet.track_interaction()
interaction = serializer.save(user=user)

# Update Redis state
redis_state.increment_item_click_count(interaction.item_id)
# ❌ Missing: UserEvent creation
```

**Required Fix**:
```python
# After creating ExperienceInteraction
if interaction.interaction_type in ['click', 'view']:
    from recommendation_engine.services import EventIngestionService
    
    EventIngestionService.ingest_event(
        user=user,
        event_type='click' if interaction.interaction_type == 'click' else 'open',
        item_id=interaction.item_id,
        item_type='newsletter',
        app_section=render.page if render else 'unknown',
        session_id=session_id,
        metadata={
            'section_type': interaction.section_type,
            'position': interaction.position,
            'dwell_time': interaction.dwell_time
        }
    )
```

**Files to Modify**:
- `inbo-backend-django/experience_app/views.py`

**Testing Required**:
- Verify UserEvent created when ExperienceInteraction created
- Verify feature updates triggered
- Verify recommendations improve after interactions

---

### 2. Placeholder Code in Production

**Issue**: Placeholder code in critical scoring paths  
**Severity**: 🔴 CRITICAL  
**Impact**: Incorrect scoring, poor recommendations  
**Locations**: Multiple

#### 2.1 Experience App Item Affinity Calculation

**Location**: `experience_app/scoring.py:302-305`

**Current Code**:
```python
# Check category match
if user_features and user_features.preferred_categories:
    # This would require item category lookup
    # Placeholder for now
    pass
```

**Required Fix**:
```python
# Check category match
if user_features and user_features.preferred_categories:
    try:
        provider = NewsletterProvider.objects.get(id=item_id)
        provider_categories = set(
            cat.category.id for cat in provider.categories.all()
        )
        user_categories = set(user_features.preferred_categories)
        
        if provider_categories & user_categories:  # Intersection
            base_score = max(base_score, 0.8)
    except NewsletterProvider.DoesNotExist:
        pass
```

#### 2.2 Experience App Item Freshness Calculation

**Location**: `experience_app/scoring.py:326-330`

**Current Code**:
```python
def _calculate_item_freshness(self, item_id: str) -> float:
    """Calculate item freshness"""
    # This would check item creation/update time
    # Placeholder for now
    return 0.5
```

**Required Fix**:
```python
def _calculate_item_freshness(self, item_id: str) -> float:
    """Calculate item freshness"""
    try:
        provider = NewsletterProvider.objects.get(id=item_id)
        if provider.created_at:
            days_old = (timezone.now() - provider.created_at).date().days
            # Freshness: 1.0 for new items, decays to 0.5 after 30 days
            return max(0.5, 1.0 - (days_old / 60.0))
        
        # Check latest post
        latest_post = NewsletterPost.objects.filter(
            newsletter_id=item_id
        ).order_by('-published_date').first()
        
        if latest_post and latest_post.published_date:
            days_old = (timezone.now() - latest_post.published_date).date().days
            return max(0.5, 1.0 - (days_old / 30.0))
        
        return 0.5
    except Exception:
        return 0.5
```

#### 2.3 Experience App Continue Reading Integration

**Location**: `experience_app/orchestrator.py:265-288`

**Current Code**:
```python
def _get_continue_reading_items(self, limit: int) -> List[Dict]:
    """Get items user was reading"""
    # Get from reading app or newsletter posts
    # This is a placeholder - integrate with reading_app
```

**Required Fix**:
```python
def _get_continue_reading_items(self, limit: int) -> List[Dict]:
    """Get items user was reading"""
    from reading_app.models import ReadingProgress
    
    # Get reading progress from reading_app
    reading_progress = ReadingProgress.objects.filter(
        user=self.user,
        completed=False
    ).order_by('-last_read_at')[:limit]
    
    items = []
    for progress in reading_progress:
        try:
            if progress.item_type == 'newsletter':
                provider = NewsletterProvider.objects.get(id=progress.item_id)
            elif progress.item_type == 'post':
                post = NewsletterPost.objects.get(id=progress.item_id)
                provider = post.newsletter
            else:
                continue
                
            items.append({
                'id': str(provider.id),
                'title': provider.name,
                'description': provider.description,
                'type': 'newsletter',
                'metadata': {
                    'url': provider.url,
                    'progress': progress.progress_percentage,
                    'last_read_at': progress.last_read_at.isoformat()
                }
            })
        except (NewsletterProvider.DoesNotExist, NewsletterPost.DoesNotExist):
            continue
    
    return items[:limit]
```

**Files to Modify**:
- `inbo-backend-django/experience_app/scoring.py`
- `inbo-backend-django/experience_app/orchestrator.py`

---

### 3. Missing Error Handling

**Issue**: Generic exception handling masks real issues  
**Severity**: 🔴 CRITICAL  
**Impact**: Silent failures, difficult debugging  
**Location**: `experience_app/orchestrator.py:261`

**Current Code**:
```python
except Exception as e:
    logger.error(f"Failed to get section items for {section_type}: {e}")
    return []
```

**Required Fix**:
```python
except NewsletterProvider.DoesNotExist:
    logger.warning(f"NewsletterProvider not found for section {section_type}")
    return []
except ValueError as e:
    logger.error(f"Invalid data for section {section_type}: {e}")
    return []
except Exception as e:
    logger.exception(f"Unexpected error getting section items for {section_type}: {e}")
    # Return empty list to prevent breaking experience generation
    return []
```

**Files to Modify**:
- `inbo-backend-django/experience_app/orchestrator.py`
- `inbo-backend-django/experience_app/scoring.py`
- `inbo-backend-django/experience_app/views.py`

---

### 4. Data Consistency Issues

**Issue**: Redis counters and ItemFeature may drift  
**Severity**: 🔴 CRITICAL  
**Impact**: Incorrect popularity scores, wrong recommendations  
**Location**: `experience_app/tasks.py:sync_redis_to_db_task()`

**Current State**:
- Redis counters updated immediately
- ItemFeature updated hourly
- No reconciliation mechanism
- Potential data loss if Redis crashes

**Required Fix**:
1. **Implement reconciliation task**:
```python
@shared_task(name='experience.reconcile_redis_to_db')
def reconcile_redis_to_db_task():
    """Reconcile Redis counters with ItemFeature"""
    redis_state = RedisStateManager()
    
    # Get all items with Redis counters
    # Compare with ItemFeature
    # Log discrepancies
    # Optionally: Auto-correct if discrepancy > threshold
```

2. **Add data validation**:
```python
# In sync_redis_to_db_task
# Validate data before syncing
# Check for negative values
# Check for unreasonable spikes
```

3. **Add backup mechanism**:
```python
# Store Redis counters in database periodically
# Use as backup if Redis fails
```

**Files to Modify**:
- `inbo-backend-django/experience_app/tasks.py`

---

## 🟠 P1 - High Priority (Fix Soon)

### 5. Missing Redis Caching for Recommendations

**Issue**: Recommendations not cached, causing performance issues  
**Severity**: 🟠 HIGH  
**Impact**: Slow API responses, high database load  
**Location**: `recommendation_engine/views.py`

**Required Fix**:
```python
# Cache recommendations in Redis
# Key: rec:user:{user_id}:{cache_key}
# TTL: 5-15 minutes
# Invalidate on user interaction
```

**Files to Modify**:
- `inbo-backend-django/recommendation_engine/views.py`
- `inbo-backend-django/recommendation_engine/services.py`

---

### 6. Inefficient Database Queries

**Issue**: N+1 queries in Experience App  
**Severity**: 🟠 HIGH  
**Impact**: Slow response times  
**Location**: `experience_app/orchestrator.py`

**Current Code**:
```python
for candidate in candidates[:limit]:
    provider = NewsletterProvider.objects.get(id=candidate['item_id'])  # N+1 query
```

**Required Fix**:
```python
# Batch fetch all providers
provider_ids = [c['item_id'] for c in candidates[:limit]]
providers = {
    str(p.id): p for p in NewsletterProvider.objects.filter(
        id__in=provider_ids
    ).prefetch_related('categories__category')
}

for candidate in candidates[:limit]:
    provider = providers.get(candidate['item_id'])
    if not provider:
        continue
```

**Files to Modify**:
- `inbo-backend-django/experience_app/orchestrator.py`

---

### 7. Missing Retry Mechanism for Search Indexing

**Issue**: Failed indexing attempts are lost  
**Severity**: 🟠 HIGH  
**Impact**: Search results incomplete  
**Location**: `search_app/signals.py`

**Required Fix**:
```python
# Add retry mechanism for failed indexing
# Use Celery task with retry
# Store failed attempts in database
# Retry with exponential backoff
```

**Files to Modify**:
- `inbo-backend-django/search_app/signals.py`
- `inbo-backend-django/search_app/tasks.py` (new file)

---

## 🟡 P2 - Medium Priority (Fix When Possible)

### 8. Standardize Redis Key Naming

**Issue**: Inconsistent Redis key patterns  
**Severity**: 🟡 MEDIUM  
**Impact**: Potential key collisions, difficult debugging

**Required Fix**:
```python
# Standardize key patterns:
# Service:Entity:ID:Field
# Examples:
# exp:user:{id}:recent_items
# rec:user:{id}:features
# search:query:{hash}:results
```

**Files to Modify**:
- All Redis usage across services

---

### 9. Add Monitoring and Alerting

**Issue**: No monitoring for service health  
**Severity**: 🟡 MEDIUM  
**Impact**: Issues go undetected

**Required Fix**:
- Add health check endpoints
- Add metrics collection
- Add alerting for critical failures

---

### 10. Consolidate Duplicate Documentation

**Issue**: Multiple sources of truth  
**Severity**: 🟡 MEDIUM  
**Impact**: Confusion, documentation drift

**Required Fix**:
- Consolidate all architecture docs into `project-documentation`
- Remove duplicate files
- Update references

---

## Testing Requirements

All fixes must include:

1. **Unit Tests**: Test the specific fix
2. **Integration Tests**: Test service integration
3. **Performance Tests**: Ensure no performance regression
4. **Manual Testing**: Verify in staging environment

---

## Deployment Checklist

Before deploying fixes:

- [ ] All tests passing
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Migration scripts ready (if needed)
- [ ] Rollback plan prepared
- [ ] Monitoring in place

---

## Priority Summary

| Priority | Count | Status |
|----------|-------|--------|
| 🔴 P0 - Critical | 4 | Must fix immediately |
| 🟠 P1 - High | 3 | Fix within 1 week |
| 🟡 P2 - Medium | 3 | Fix within 1 month |

**Total Critical Issues**: 10

---

**Last Updated**: 2025-01-24  
**Next Review**: After P0 fixes deployed
