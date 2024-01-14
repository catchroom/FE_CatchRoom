'use client';
import LeftArrowComponent from '@/public/svgComponent/leftArrow';
import { useRouter } from 'next/navigation';
import React from 'react';

const TopHeader = () => {
  const router = useRouter();

  const backPageHandler = () => {
    router.back();
  };
  return (
    <div className="relative h-[3.25rem] flex items-center justify-center">
      <button className="absolute left-0 ml-3 p-3" onClick={backPageHandler}>
        <LeftArrowComponent />
      </button>
      <button className="flex items-center justify-center text-t1 font-bold">
        2023년 12월
      </button>
    </div>
  );
};

export default TopHeader;
