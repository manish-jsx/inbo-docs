# Quick Authentication Setup

## Step 1: Create Environment File

Create a `.env.local` file in the project root:

```bash
# Copy this content to .env.local
AUTH_USERNAME=admin
AUTH_PASSWORD=your-secure-password-here
```

## Step 2: Set Your Credentials

Replace `your-secure-password-here` with a strong password.

## Step 3: Restart Development Server

```bash
pnpm dev
```

## Step 4: Test

1. Open http://localhost:3000
2. You should be redirected to `/login`
3. Enter your username and password
4. You'll be authenticated and can access all pages

## Default Credentials (Development Only)

If no environment variables are set:
- Username: `admin`
- Password: `password`

**⚠️ Always set proper credentials in production!**

## Logout

Click the "Logout" button in the header to sign out.

## Production Deployment

Set these environment variables in your hosting platform:
- `AUTH_USERNAME`
- `AUTH_PASSWORD`

See `AUTHENTICATION_SETUP.md` for detailed documentation.
