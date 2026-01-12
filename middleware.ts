import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('auth-token')?.value === 'authenticated';

  // Allow access to login page and auth API routes
  if (request.nextUrl.pathname.startsWith('/api/auth/') || 
      request.nextUrl.pathname === '/login') {
    if (isAuthenticated && request.nextUrl.pathname === '/login') {
      // Redirect to home if already authenticated and trying to access login
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Protect all other routes
  if (!isAuthenticated) {
    // Redirect to login page
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
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
