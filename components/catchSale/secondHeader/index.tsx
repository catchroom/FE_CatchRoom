'use client';
import React from 'react';
import DownArrowComponent from '@/public/svgComponent/downArrow';
import Marker from '@/public/svgComponent/marker';

const SecondHeader = () => {
  return (
    <div className="flex justify-between w-full p-5 items-center">
      <div className="font-bold text-t2">총 12건</div>
      <div className="flex gap-1 text-p2">
        {/* 드롭다운 UI 나오면 변경 예정 */}
        <div className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[20px]">
          <Marker />
          전체
          <DownArrowComponent />
        </div>
        <div className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[20px]">
          낮은 가격순
          <DownArrowComponent />
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
