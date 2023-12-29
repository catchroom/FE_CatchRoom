import React from 'react';

const SaleInfoContainer = () => {
  return (
    <div className="w-[355px] p-3 bg-gray-200 flex flex-col gap-[22px] ">
      <div className="flex flex-col items-start">
        <h1 className="text-h2">제주신라호텔</h1>
        <p className="text-p2">스탠다드 더블</p>
      </div>
      <div className="flex items-center gap-[22px] justify-between bg-white px-5 py-[10px]">
        <div className="flex flex-col items-center">
          <p>체크인</p>
          <p className="text-p2">2023-12-08 (월)</p>
          <p className="text-p2">15:00</p>
        </div>
        <div className="flex flex-col items-center">
          <p>체크아웃</p>
          <p className="text-p2">2023-12-09 (화)</p>
          <p className="text-p2">11:00</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-h2">구매가</p>
        <span className="text-h2">180,000원</span>
      </div>
    </div>
  );
};

export default SaleInfoContainer;
