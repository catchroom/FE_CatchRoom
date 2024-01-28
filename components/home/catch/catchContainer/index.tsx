'use client';

import React from 'react';
import CatchSwiper from '../catchSwiper';
import { useRouter } from 'next/navigation';

const CatchContainer = () => {
  const router = useRouter();
  const handleViewAllBtnClick = () => {
    router.push('/catchSale');
  };
  return (
    <div className="w-full mt-12">
      <div className="flex items-center justify-between font-bold">
        <h2 className="lg:text-h4 md:text-t1 sm:text-t1">
          캐치특가 숙소 <span className="text-main">50%~</span>
        </h2>
        <span
          onClick={handleViewAllBtnClick}
          className="underline decoration-solid cursor-pointer text-text-sub lg:text-p2 md:text-[12px] sm:text-[12px] "
        >
          전체보기
        </span>
      </div>

      <p className="mt-1 lg:text-p1 text-text-sub md:text-p2 sm:text-p2">
        구매가 대비 50% 이상 할인된 숙소
      </p>
      <CatchSwiper />
    </div>
  );
};

export default CatchContainer;
