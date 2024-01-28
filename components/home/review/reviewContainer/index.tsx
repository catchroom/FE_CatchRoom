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
    <div className="w-full mt-16">
      <div className="flex justify-between my-3">
        <h1 className="lg:text-h4 font-bold md:text-t1 sm:text-t1 text-t1">
          이용후기
        </h1>
        <span
          onClick={handleClickViewAllBtn}
          className="underline decoration-solid cursor-pointer lg:text-t3 text-text-sub md:text-[12px] sm:text-[12px] text-[12px]"
        >
          전체보기
        </span>
      </div>
      <ReviewSwiper />
    </div>
  );
};

export default ReviewContainer;
