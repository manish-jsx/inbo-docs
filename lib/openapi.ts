// OpenAPI configuration
// This file provides utilities for OpenAPI documentation

export const OPENAPI_SCHEMA_URL = 
  process.env.OPENAPI_SCHEMA_URL || 
  'https://inbo-django-api.azurewebsites.net/api/schema/';

export const OPENAPI_DOCS_URL = 
  process.env.OPENAPI_DOCS_URL || 
  'https://inbo-django-api.azurewebsites.net/api/docs/';

export const OPENAPI_REDOC_URL = 
  process.env.OPENAPI_REDOC_URL || 
  'https://inbo-django-api.azurewebsites.net/api/redoc/';

// Direct links to hosted API documentation
export const API_DOCS_LINKS = {
  swagger: 'https://inbo-django-api.azurewebsites.net/api/docs/',
  redoc: 'https://inbo-django-api.azurewebsites.net/api/redoc/',
  schema: 'https://inbo-django-api.azurewebsites.net/api/schema/',
};
