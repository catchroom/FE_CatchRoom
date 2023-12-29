import React from 'react';
import Header from '@/components/common/header';
import BottomNav from '@/components/common/bottomNav';
const page = () => {
  return (
    <>
      <Header
        title="마이페이지"
        showBackButton
        // showCloseButton
        showMoreButton
        showBorder
      />
      <BottomNav />
    </>
  );
};

export default page;
