import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUrl } from './utils/get-current-url';

export const middleware = (req: NextRequest) => {
  if (!req.nextUrl.pathname.startsWith('/api')) return;

  const url = getCurrentUrl();
  return NextResponse.rewrite(`${url}/api/bypass/get`);
};

export const config = {
  matcher: ['/api/:path*'],
};
