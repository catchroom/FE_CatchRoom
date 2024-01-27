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

  const findBorder = (pathname: string) => {
    return MYPAGE_APP_ROUTE.find((route) => route.LOCATION === pathname)
      ?.BOTTOM;
  };

  const title = pathname && findTitle(pathname);
  const border = pathname ? findBorder(pathname) : false;

  return (
    <div className="w-full max-w-[480px] fixed inset-0 left-1/2 -translate-x-1/2">
      <Header
        title={title ? title : '리뷰 쓰기'}
        showBackButton
        showBorder={border}
      />
    </div>
  );
};

export default MyPageHeader;
