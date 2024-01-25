import InfiniteScrollWrapper from '@/components/catchSale/InfiniteScrollWrapper';
import SecondHeader from '@/components/catchSale/secondHeader';
import Header from '@/components/common/header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header title="캐치특가 50%~" showBackButton={true} />
      <SecondHeader />
      <InfiniteScrollWrapper />
    </div>
  );
};

export default page;
