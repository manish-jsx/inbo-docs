# Basic Authentication Setup

## Overview

The documentation site is now protected with basic authentication. All routes require valid credentials to access.

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
AUTH_USERNAME=your-username
AUTH_PASSWORD=your-secure-password
```

**Important**: 
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Use strong passwords in production
- Default values are `admin` / `password` if not set (for development only)

### Example `.env.local`

```bash
# Basic Authentication Credentials
AUTH_USERNAME=admin
AUTH_PASSWORD=your-secure-password-here
```

## How It Works

### 1. Middleware Protection

The `middleware.ts` file protects all routes except:
- `/login` - Login page
- `/api/auth/login` - Login API endpoint
- Static assets (`_next/static`, `_next/image`, etc.)

### 2. Authentication Flow

1. **Unauthenticated User**:
   - Tries to access any protected route
   - Gets redirected to `/login?redirect=/original-path`
   - Enters username and password
   - On success, redirected to original path

2. **Authenticated User**:
   - Has `auth-token` cookie set
   - Can access all protected routes
   - Can logout via header button

### 3. Session Management

- **Cookie Name**: `auth-token`
- **Cookie Value**: `authenticated`
- **Duration**: 7 days
- **Security**:
  - `httpOnly`: true (prevents JavaScript access)
  - `secure`: true in production (HTTPS only)
  - `sameSite`: 'lax' (CSRF protection)

## Files Created

1. **`middleware.ts`** - Next.js middleware that protects all routes
2. **`app/login/page.tsx`** - Login page component
3. **`app/api/auth/login/route.ts`** - Login API endpoint
4. **`app/api/auth/logout/route.ts`** - Logout API endpoint
5. **`.env.example`** - Example environment variables file

## Usage

### Login

1. Navigate to any protected route
2. You'll be redirected to `/login`
3. Enter username and password from environment variables
4. Click "Sign in"
5. You'll be redirected to the original page

### Logout

1. Click the "Logout" button in the header
2. You'll be redirected to the login page
3. All protected routes require re-authentication

## Development

### Local Development

1. Create `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Set your credentials:
   ```bash
   AUTH_USERNAME=dev
   AUTH_PASSWORD=dev123
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

### Production Deployment

1. Set environment variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Other platforms**: Follow their environment variable setup

2. Ensure `AUTH_USERNAME` and `AUTH_PASSWORD` are set

3. Deploy the application

## Security Considerations

### Current Implementation

- ✅ Basic authentication with username/password
- ✅ HTTP-only cookies
- ✅ Secure cookies in production
- ✅ Session expiration (7 days)
- ✅ CSRF protection (sameSite: 'lax')

### Recommendations for Production

1. **Use Strong Passwords**: Set complex passwords in environment variables
2. **HTTPS Only**: Ensure your site uses HTTPS in production
3. **Rate Limiting**: Consider adding rate limiting to login endpoint
4. **Password Hashing**: For multiple users, consider implementing proper password hashing
5. **2FA**: For enhanced security, consider adding two-factor authentication
6. **Session Management**: Consider shorter session durations for sensitive data

## Troubleshooting

### Can't Access Site

- Check that `.env.local` exists and has correct credentials
- Verify environment variables are set in production
- Check browser console for errors
- Clear browser cookies and try again

### Login Not Working

- Verify `AUTH_USERNAME` and `AUTH_PASSWORD` are set correctly
- Check browser console for API errors
- Ensure cookies are enabled in browser
- Check that middleware is running (check Network tab)

### Logout Not Working

- Clear browser cookies manually
- Check that `/api/auth/logout` endpoint is accessible
- Verify cookie deletion in browser DevTools

## Testing

### Test Login

1. Open browser in incognito/private mode
2. Navigate to any protected route
3. Should redirect to login page
4. Enter correct credentials
5. Should redirect to original page
6. Should be able to navigate freely

### Test Logout

1. While authenticated:
2. Click logout button
3. Should redirect to login page
4. Try accessing protected route
5. Should redirect to login again

## Support

For issues or questions, check:
- Next.js Middleware documentation
- Cookie security best practices
- Environment variable configuration for your hosting platform
