import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  // if req.nextUrl.pathname doesn't start with /api, return
  if (!req.nextUrl.pathname.startsWith('/api')) return;

  const url = process.env.QUERY_PATH;
  return NextResponse.rewrite(`${url}/api/bypass/get`);
};

export const config = {
  matcher: ['/api/:path*'],
};
