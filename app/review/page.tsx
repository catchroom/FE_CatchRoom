import Header from '@/components/common/header';
import ReviewItem from '@/components/review/reviewItem';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header title="이용후기" showBackButton={true} />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
};

export default page;
