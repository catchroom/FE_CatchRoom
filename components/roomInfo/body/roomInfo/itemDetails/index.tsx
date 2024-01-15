import React from 'react';
import RateIcon from './rateIcon';

const ItemDetailComponent = () => {
  // 받아와야 할 데이터
  // (숙소명, 룸타입, 별점)
  return (
    <div>
      <div className="flex flex-col items-start">
        <p className="text-h4 font-extrabold">제주신라호텔</p>
        <p className="text-t2 font-semibold text-text-sub">스탠다드 더블</p>
      </div>
      <div className="flex flex-wrap items-center justify-start mt-2">
        <RateIcon />
        <p className="text-t3 text-black font-medium ml-1">4.5</p>
      </div>
    </div>
  );
};

export default ItemDetailComponent;
