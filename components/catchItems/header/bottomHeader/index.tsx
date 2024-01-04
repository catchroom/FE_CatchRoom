import DownArrowComponent from '@/public/svgComponent/downArrow';
import React from 'react';

const BottomHeader = () => {
  return (
    <div className="w-full h-14 flex px-7 gap-10 items-center justify-between text-xl text-p1 font-semibold">
      <div className="text-p2 font-semibold">오늘 12건</div>
      <div className="flex">
        <div className="mr-1 flex items-center rounded-full border border-black px-3 py-1 font-medium">
          낮은 가격 순&nbsp; <DownArrowComponent />
        </div>
        <div className="flex items-center rounded-full border border-black px-3 py-1 font-medium">
          서울&nbsp; <DownArrowComponent />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
