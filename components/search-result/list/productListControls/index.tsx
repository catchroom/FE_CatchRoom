import DownArrowIcon from '@/public/svgComponent/downArrow';
import React from 'react';

const ProductListControls = () => {
  return (
    <div className="flex items-center justify-between w-full h-[4.75rem] p-5 border-border-sub border-t text-xl text-p1 font-semibold">
      <p className="text-t2 font-bold">총 12건</p>
      <div className="flex">
        <button className="flex items-center justify-between gap-1 text-t3 font-semibold">
          <p>낮은 가격 순</p>
          <DownArrowIcon width={12} height={7} />
        </button>
      </div>
    </div>
  );
};

export default ProductListControls;
