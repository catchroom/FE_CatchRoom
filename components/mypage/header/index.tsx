'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/common/header';
import { MYPAGE_APP_ROUTE } from '@/constants/mypage';

const MyPageHeader = () => {
  const pathname = usePathname();

  const findTitle = (pathname: string) => {
    return MYPAGE_APP_ROUTE.find((route) => route.LOCATION === pathname)?.TITLE;
  };

  const title = pathname && findTitle(pathname);

  return (
    <div className="w-full max-w-[480px] fixed inset-0 left-1/2 -translate-x-1/2">
      <Header title={title ? title : '로딩중'} showBackButton showBorder />
    </div>
  );
};

export default MyPageHeader;
