import CatchItemContainer from '@/components/catchSale/catchItemContainer';
import SecondHeader from '@/components/catchSale/secondHeader';
import Header from '@/components/common/header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header title="캐치특가 50%~" showBackButton={true} />
      <SecondHeader />
      <CatchItemContainer />
    </div>
  );
};

export default page;
