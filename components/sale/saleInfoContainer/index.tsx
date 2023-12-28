import React from 'react';

const SaleInfoContainer = () => {
  return (
    <div className="w-[355px] p-3">
      <div className="flex flex-col items-start">
        <h1>제주신라호텔</h1>
        <p>스탠다드 더블</p>
      </div>
      <div className="flex items-center gap-[22px] justify-between">
        <div className="flex flex-col ">
          <p>체크인</p>
          <p>2023-12-08 (월)</p>
          <p>15:00</p>
        </div>
        <div className="flex flex-col">
          <p>체크아웃</p>
          <p>2023-12-09 (화)</p>
          <p>11:00</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>구매가</p>
        <span>180,000원</span>
      </div>
    </div>
  );
};

export default SaleInfoContainer;
