import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow favicon requests to pass through without authentication
  if (pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('auth-token')?.value === 'authenticated';

  // Allow access to login page and auth API routes
  if (pathname.startsWith('/api/auth/') || pathname === '/login') {
    if (isAuthenticated && pathname === '/login') {
      // Redirect to home if already authenticated and trying to access login
      return NextResponse.redirect(new URL('/', request.url));
    }
    // Allow unauthenticated access to login page and auth API
    return NextResponse.next();
  }

  // Protect all other routes
  if (!isAuthenticated) {
    // Redirect to login page
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
