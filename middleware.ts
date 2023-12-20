import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUrl } from './utils/get-current-url';

export const middleware = (req: NextRequest) => {
  // if req.nextUrl.pathname doesn't start with /api, return
  if (!req.nextUrl.pathname.startsWith('/api')) return;

  const url =
    process.env.NODE_ENV === 'development'
      ? process.env.QUERY_PATH
      : getCurrentUrl();
  return NextResponse.rewrite(`${url}/api/bypass/get`);
};

export const config = {
  matcher: ['/api/:path*'],
};
