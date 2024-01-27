'use client';

import Header from '@/components/common/header';
import { usePathname } from 'next/navigation';
import React from 'react';
import ChatHeader from '../header';

const HeadWrapper = () => {
  const pathName = usePathname();

  console.log(pathName);

  const ViewHeader =
    pathName === '/chat' ? (
      <Header title="채팅" showBackButton />
    ) : (
      <ChatHeader />
    );
  return <>{ViewHeader}</>;
};

export default HeadWrapper;
