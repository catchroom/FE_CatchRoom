'use client';

import Header from '@/components/common/header';
import { usePathname } from 'next/navigation';
import React from 'react';
import ChatHeader from '../header';

const HeadWrapper = () => {
  const pathname = usePathname();

  const headerValue = pathname === '/chat' ? true : false;
  return (
    <>
      {headerValue ? (
        <Header title="채팅" showBackButton showBorder />
      ) : (
        <ChatHeader />
      )}
    </>
  );
};

export default HeadWrapper;
