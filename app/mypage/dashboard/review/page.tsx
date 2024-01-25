import ReviewForm from '@/components/mypage/form/reviewForm';
import ReviewHeader from '@/components/mypage/review';
import React from 'react';

const page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const id = parseInt(searchParams.id as string);
  const type = searchParams.type as '구매' | '판매';
  const reviewId = parseInt(searchParams.reviewId as string);
  console.log(id, type, reviewId);

  if (isNaN(id) || (type !== '구매' && type !== '판매')) {
    return null;
  }

  return (
    <div className="w-full h-full">
      <ReviewHeader id={id} />
      <div className="w-full h-full p-5">
        <ReviewForm id={id} type={type} reviewId={reviewId} />
      </div>
    </div>
  );
};

export default page;
