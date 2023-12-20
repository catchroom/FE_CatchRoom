import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  if (!req.nextUrl.pathname.startsWith('/api')) return;

  console.log('middleware');

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://main.dhlbrqe2v28e4.amplifyapp.com/'
      : 'http://localhost:3000';
  return NextResponse.rewrite(`${url}/api/bypass/get`);
};

export const config = {
  matcher: ['/api/:path*'],
};
