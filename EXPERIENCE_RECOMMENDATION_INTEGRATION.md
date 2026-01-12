# Experience App → Recommendation Engine Integration

## How Experience App Updates Recommendation Rankings

### Overview

The Experience App creates a **feedback loop** that continuously improves recommendation rankings based on real-time user interactions. Every click, view, and interaction in the experience feeds back into the Recommendation Engine, updating item popularity scores and improving future recommendations.

## Current Implementation

### 1. Experience Interaction Tracking

When a user interacts with items in the experience:

```python
# User clicks item from "Personalized Picks" section
POST /api/api/experience/interactions/
{
  "interaction_type": "click",
  "section_type": "personalized_picks",
  "item_id": "newsletter_id",
  "position": 2
}
```

### 2. Redis State Update (Immediate)

Experience App updates Redis counters immediately:

```python
# In ExperienceViewSet.track_interaction()
if interaction.interaction_type == 'click':
    redis_state.increment_item_click_count(item_id)
    redis_state.update_user_recent_items(user_id, item_id)
```

**Redis Keys Updated**:
- `exp:item:{item_id}:clicks` - Click counter incremented
- `exp:item:{item_id}:views` - View counter (if view interaction)
- `exp:user:{user_id}:recent_items` - Recent items list updated

### 3. Periodic Sync to Database (Hourly)

Background task syncs Redis counters to ItemFeature:

```python
# In sync_redis_to_db_task (runs hourly)
view_count = redis_state.get_item_view_count(item_id)
click_count = redis_state.get_item_click_count(item_id)

# Update ItemFeature model
item_features.total_opens = view_count
item_features.total_clicks = click_count
item_features.avg_open_rate = opens / total_events
item_features.avg_click_rate = clicks / total_events
```

### 4. ItemFeature Reputation Score Recalculation

ItemFeature.provider_reputation_score is recalculated:

```python
# In FeatureStoreService.update_item_features()
item_features.provider_reputation_score = (
    avg_open_rate * 0.4 +
    avg_click_rate * 0.4 +
    (subscriber_count / 1000.0) * 0.2
)
```

### 5. Next Recommendation Generation Uses Updated Scores

When generating next recommendations:

```python
# In CandidateGeneratorService.generate_candidates_by_popularity()
item_features = ItemFeature.objects.filter(
    total_subscribers__gt=0
).order_by(
    '-provider_reputation_score',  # Uses updated score from experience interactions
    '-total_subscribers',
    '-avg_open_rate'  # Uses updated rate
)
```

## Complete Feedback Loop

```
User Views Experience
  ↓
ExperienceRender created
  ↓
Sections populated with recommendations
  ↓
User Clicks Item
  ↓
ExperienceInteraction created
  ↓
Redis counters updated (immediate)
  ↓
Hourly sync: ItemFeature updated
  ↓
ItemFeature.provider_reputation_score recalculated
  ↓
Next recommendations use improved scores
  ↓
Better items ranked higher
  ↓
Improved experience in next request
```

## Impact on Rankings

### Before Experience Interaction

**Item A**:
- ItemFeature.provider_reputation_score: 0.12
- Recommendation score: 0.45
- Rank in recommendations: #15

### After User Clicks Item A from Experience

**Immediate** (Redis):
- Click counter: +1
- Recent items: Item A added

**After Hourly Sync** (Database):
- ItemFeature.total_clicks: +1
- ItemFeature.avg_click_rate: increased
- ItemFeature.provider_reputation_score: 0.14 (increased)

**Next Recommendations**:
- Recommendation score: 0.48 (improved)
- Rank: #12 (moved up 3 positions)
- Appears higher in next experience

## Integration Points

### 1. Experience App Uses Recommendation Engine

**For Item Population**:
- `personalized_picks` section → `CandidateGeneratorService.generate_candidates_for_user()`
- `trending` section → `CandidateGeneratorService.generate_candidates_by_popularity()`
- `similar_to` section → `CandidateGeneratorService.generate_candidates_by_category()`

**For Scoring**:
- ExperienceScorer uses `UserFeature` for user affinity
- ExperienceScorer uses Redis counters (from ItemFeature) for popularity

### 2. Experience App Feeds Back to Recommendation Engine

**Through Redis State**:
- Item view/click counters → Synced to ItemFeature
- User recent items → Influences engagement calculations

**Through Section Metrics**:
- ExperienceSectionMetrics.engagement_score
- Used to improve section weighting
- Influences recommendation algorithm tuning

## Current Limitations & Future Enhancements

### Current Implementation

✅ **Working**:
- Redis counters updated immediately
- Hourly sync to ItemFeature
- ItemFeature scores improve over time
- Recommendations use updated scores

⚠️ **Limitations**:
- Sync happens hourly (not real-time)
- ExperienceInteraction doesn't automatically create UserEvent
- No direct ExperienceInteraction → UserEvent flow

### Recommended Enhancements

1. **Automatic UserEvent Creation**:
   ```python
   # In ExperienceViewSet.track_interaction()
   # After creating ExperienceInteraction:
   if interaction.interaction_type in ['click', 'view']:
       EventIngestionService.ingest_event(
           user=user,
           event_type='click' if interaction.interaction_type == 'click' else 'open',
           item_id=interaction.item_id,
           item_type='newsletter',
           app_section=render.page if render else 'unknown',
           session_id=session_id
       )
   ```

2. **More Frequent Syncs**:
   - Current: Hourly
   - Recommended: Every 5-10 minutes for active items

3. **Real-time Feature Updates**:
   - Update ItemFeature immediately for high-priority interactions
   - Use Celery task with higher priority

## Monitoring

### Key Metrics to Track

1. **Feedback Loop Health**:
   - ExperienceInteraction → UserEvent conversion rate
   - Redis → ItemFeature sync success rate
   - Time between interaction and feature update

2. **Ranking Improvement**:
   - Item rank changes after interactions
   - Recommendation score improvements
   - CTR improvements over time

3. **Performance**:
   - Experience API response time
   - Redis sync task duration
   - Feature update latency

## Summary

The Experience App creates a **continuous feedback loop** with the Recommendation Engine:

1. **Forward Flow**: Recommendation Engine provides items for experience sections
2. **Feedback Flow**: Experience interactions update item popularity scores
3. **Improvement**: Updated scores improve next recommendations
4. **Result**: Self-improving system where recommendations get better over time

The integration ensures that:
- User behavior directly influences recommendation rankings
- Popular items (based on actual clicks) rank higher
- The system learns and improves from every interaction
- Personalization becomes more accurate over time
