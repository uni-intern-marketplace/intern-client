import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Беттердің топтары
  const isAuthPage = pathname.startsWith('/auth');
  const isDashboardPage = pathname.startsWith('/dashboard');
  const isAdminPage = pathname.startsWith('/admin');
  
  // 1. Егер пайдаланушы жүйеге КІРМЕГЕН болса
  if (!token) {
    // Және ол қорғалған бетке (dashboard немесе admin) кірмек болса
    if (isDashboardPage || isAdminPage) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // Бұл жағдайда /auth/login және /auth/register беттері ашық болады
    return NextResponse.next();
  }

  // 2. Егер пайдаланушы жүйеге КІРІП ТҰРСА (token бар)
  if (token && isAuthPage) {
    // Оған қайтадан логин немесе тіркелу бетіне кірудің қажеті жоқ
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Статикалық файлдар мен API-дан басқа барлық жолдарды тексеру
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};