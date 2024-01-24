import Header from '@/components/common/header';
import ReviewContainer from '@/components/review/reviewContainer';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header title="이용후기" showBackButton={true} />
      <ReviewContainer />
    </div>
  );
};

export default page;
