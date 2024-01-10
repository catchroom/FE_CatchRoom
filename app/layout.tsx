import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from '@/components/common/provider/provider';
import RootTemplate from '@/components/common/layoutTemplate/RootTemplate';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'catchroom',
  description: 'Catchroom is a platform for finding re-sell rooms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`}
        />
      </head>
      <body className={inter.className}>
        <ClientProvider>
          <RootTemplate>{children}</RootTemplate>
        </ClientProvider>
      </body>
    </html>
  );
}
