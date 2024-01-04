'use client';

import React from 'react';
import ReviewSwiper from '../reviewSwiper';
import { useRouter } from 'next/navigation';

const ReviewContainer = () => {
  const router = useRouter();

  const handleClickViewAllBtn = () => {
    router.push('/review');
  };
  return (
    <div className="w-full mt-16 pb-14">
      <div className="flex justify-between my-3">
        <h1 className="text-h4 font-bold">이용후기</h1>
        <span
          onClick={handleClickViewAllBtn}
          className="underline decoration-solid cursor-pointer text-t3 text-text-sub"
        >
          전체보기
        </span>
      </div>
      <ReviewSwiper />
    </div>
  );
};

export default ReviewContainer;
