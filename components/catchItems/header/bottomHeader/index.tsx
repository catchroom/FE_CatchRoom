import React from 'react';
import { SlArrowDown } from 'react-icons/sl';

const BottomHeader = () => {
  return (
    <div className="w-full h-14 flex px-7 gap-10 items-center justify-between text-xl  text-p1 font-semibold">
      <div className="text-p2 font-semibold">오늘 12건</div>
      <div className="flex items-center rounded-full border px-3 py-1 font-medium">
        서울&nbsp; <SlArrowDown />
      </div>
    </div>
  );
};

export default BottomHeader;
