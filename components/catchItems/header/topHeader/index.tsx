'use client';
import DownArrowIcon from '@/public/svgComponent/downArrow';
import LeftArrowComponent from '@/public/svgComponent/leftArrow';
import { useRouter } from 'next/navigation';
import React from 'react';

const TopHeader = () => {
  const router = useRouter();

  const backPageHandler = () => {
    router.back();
  };
  return (
    <div className="relative h-[3.25rem] flex py-3 px-4 items-center justify-center">
      <button className="absolute left-0 ml-3 p-3" onClick={backPageHandler}>
        <LeftArrowComponent />
      </button>
      <button className="flex items-center justify-center text-t1 font-bold">
        2023년 12월
        <p className="flex items-center justify-center w-[1rem] h-[1rem] ml-1">
          <DownArrowIcon width={12} height={7} />
        </p>
      </button>
    </div>
  );
};

export default TopHeader;
