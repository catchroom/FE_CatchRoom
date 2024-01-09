import LeftArrowComponent from '@/public/svgComponent/leftArrow';
import React from 'react';

const TopHeader = () => {
  return (
    <div className="relative h-20 flex py-2 items-center justify-center text-xl text-h2 font-bold">
      <button className="absolute left-0 ml-3 p-3">
        <LeftArrowComponent />
      </button>
      <span className="flex">2023년 12월</span>
    </div>
  );
};

export default TopHeader;
