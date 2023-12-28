import React from 'react';
import Header from '@/components/common/header';

const page = () => {
  return (
    <Header
      title="마이페이지"
      showBackButton
      //   showCloseButton
      showMoreButton
      showBorder
    />
  );
};

export default page;
