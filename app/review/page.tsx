import Header from '@/components/common/header';
import InfiniteScrollWrapper from '@/components/review/InfiniteScrollWrapper';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header title="이용후기" showBackButton={true} />
      <InfiniteScrollWrapper />
    </div>
  );
};

export default page;
