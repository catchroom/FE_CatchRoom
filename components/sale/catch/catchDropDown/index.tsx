import React from 'react';

const CatchDropContainer = () => {
  return (
    <div className="flex w-[355px] border border-black h-[56px] text-p1 items-center gap-1 mt-2">
      <span className="pl-4">90,000원</span>
      <span className="text-pink-600 font-bold">50% 할인가</span>
      <div className="bg-pink-600 text-white text-p3 px-2 py-1 h-fit rounded-xl">
        판매 수수료 0%
      </div>
    </div>
  );
};

export default CatchDropContainer;
