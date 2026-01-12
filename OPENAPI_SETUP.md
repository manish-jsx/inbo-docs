# OpenAPI Documentation Setup

This guide explains how to set up OpenAPI API documentation in the Fumadocs documentation site.

## Prerequisites

1. Install dependencies:
```bash
pnpm install
```

This will install `fumadocs-openapi` and `shiki` packages.

## Setup Steps

### 1. Fetch OpenAPI Schema

The Django backend exposes the OpenAPI schema at `/api/schema/`. Fetch it using:

```bash
pnpm run fetch-openapi
```

Or manually:
```bash
curl https://inbo-django-api.azurewebsites.net/api/schema/ > openapi.json
```

### 2. Verify Configuration

The OpenAPI configuration is in `lib/openapi.ts`. It will:
- First try to load from `openapi.json` (local file)
- Fallback to fetching from the URL if local file doesn't exist

### 3. Using APIPage Component

In your MDX files, use the `<APIPage />` component to render API documentation:

```mdx
---
title: API Reference
---

# API Reference

<APIPage path="/" />
```

The `path` prop specifies which API path to display. Use `/` for the root or specific paths like `/api/auth/` for specific endpoints.

### 4. Available Endpoints

The OpenAPI schema includes all API endpoints from the Django backend:
- `/api/auth/` - Authentication
- `/api/user/` - User management
- `/api/email/` - Email operations
- `/api/reading/` - Reading statistics
- `/api/directory/` - Newsletter directory
- `/api/subscription/` - Subscriptions
- And more...

## Updating the Schema

When the backend API changes, update the schema:

```bash
pnpm run fetch-openapi
```

The schema will be automatically used in the documentation.

## Troubleshooting

### Schema Not Loading

1. Check if `openapi.json` exists in the project root
2. Verify the backend is accessible at the configured URL
3. Check browser console for errors

### APIPage Not Rendering

1. Ensure `fumadocs-openapi` is installed
2. Verify `lib/openapi.ts` is configured correctly
3. Check that `mdx-components.tsx` includes the APIPage component

## Environment Variables

You can customize the schema URL using:

```bash
OPENAPI_SCHEMA_URL=https://your-api-url.com/api/schema/ pnpm run fetch-openapi
```
