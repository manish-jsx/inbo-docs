import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('[Auth] Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format. Expected JSON.' },
        { status: 400 }
      );
    }

    const { username, password } = body;

    // Validate that username and password are provided
    if (!username || !password) {
      console.error('[Auth] Missing credentials:', { hasUsername: !!username, hasPassword: !!password });
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Get credentials from environment variables
    const validUsername = process.env.AUTH_USERNAME || 'admin';
    const validPassword = process.env.AUTH_PASSWORD || 'password';

    // Log authentication attempt (without sensitive data)
    console.log('[Auth] Login attempt:', { 
      usernameProvided: !!username, 
      passwordProvided: !!password,
      envUsernameSet: !!process.env.AUTH_USERNAME,
      envPasswordSet: !!process.env.AUTH_PASSWORD 
    });

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      // Set authentication cookie
      const cookieStore = await cookies();
      cookieStore.set('auth-token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      console.log('[Auth] Authentication successful');
      return NextResponse.json(
        { success: true, message: 'Authentication successful' },
        { status: 200 }
      );
    } else {
      console.warn('[Auth] Invalid credentials provided');
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('[Auth] Unexpected error:', error);
    return NextResponse.json(
      { error: 'An error occurred during authentication. Please try again.' },
      { status: 500 }
    );
  }
}
