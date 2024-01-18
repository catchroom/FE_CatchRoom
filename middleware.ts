import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (accessToken) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/mypage', request.url));
    }
  } else if (!accessToken) {
    if (request.nextUrl.pathname.startsWith('/mypage')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}
