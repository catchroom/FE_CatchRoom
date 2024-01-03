'use client';

import React from 'react';
import CatchSwiper from '../catchSwiper';

const CatchContainer = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex justify-between font-bold">
        <h2>
          캐치특가 숙소 <span className="text-main">50%~</span>
        </h2>
        <span className="underline decoration-solid cursor-pointer">
          전체보기
        </span>
      </div>

      <p className="mt-1">구매가 대비 50% 이상 할인된 숙소</p>
      <CatchSwiper />
    </div>
  );
};

export default CatchContainer;
