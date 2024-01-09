import DownArrowIcon from '@/public/svgComponent/downArrow';
import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import React from 'react';

const BottomHeader = () => {
  const buttonStyle =
    'flex items-center gap-2 h-[2.25rem] bg-white rounded-full border border-border-sub px-3 py-2 text-t3 font-semibold ';

  return (
    <div className="flex items-center justify-between w-full h-[4.75rem] p-5 border-border-sub border-t text-xl text-p1 font-semibold">
      <p className="text-t2 font-bold">총 12건</p>
      <div className="flex">
        <button className={buttonStyle + 'mr-1'}>
          <MapPinSmFillIcon />
          <p>서울</p>
          <DownArrowIcon width={12} height={7} />
        </button>
        <button className={buttonStyle}>
          <p>낮은 가격 순</p>
          <DownArrowIcon width={12} height={7} />
        </button>
      </div>
    </div>
  );
};

export default BottomHeader;
