import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const accessToken = cookies().get('accessToken')?.value;
  // const accessToken = request.cookies.get('accessToken')?.value; 랑 동일..!

  // 채팅 리다리렉트
  if (request.nextUrl.pathname.startsWith('/chat')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/user-chat-login', request.url));
    } else return NextResponse.next();
  }

  if (accessToken) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/mypage', request.url));
    }
  } else if (!accessToken) {
    if (request.nextUrl.pathname.startsWith('/mypage')) {
      if (request.nextUrl.pathname === '/mypage/dashboard/terms') {
        return NextResponse.next();
      } else if (
        request.nextUrl.pathname.startsWith('/mypage/dashboard/conditions')
      ) {
        return NextResponse.next();
      } else if (request.nextUrl.pathname === '/mypage/dashboard/privacy') {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }
  return NextResponse.next();
}
