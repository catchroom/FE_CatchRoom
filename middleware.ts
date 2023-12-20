import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUrl } from './utils/get-current-url';

export const middleware = (req: NextRequest) => {
  const url = getCurrentUrl();
  console.log('url', req.nextUrl.pathname);
  return NextResponse.rewrite(`${url}/api/v1/get`);
};

export const config = {
  matcher: ['/api/:path*'],
};
