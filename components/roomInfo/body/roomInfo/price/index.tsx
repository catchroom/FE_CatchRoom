import React from 'react';

// 구매가, 할인율, 할인된 가격 필요.
const PriceComponent = () => {
  // 받아와야 할 데이터
  // (구매가, 할인률, 판매가)
  return (
    <div className=" py-5 border-b border-divider-sub">
      <div className="flex flex-wrap items-center justify-between ">
        <span className="text-t2 font-semibold">구매가</span>
        <p className="text-t2 text-gray-600  font-semibold">300,000원</p>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <span className="text-t2 font-semibold">판매가</span>
        <div className="flex flex-wrap items-center justify-center">
          <p className=" text-main font-bold">30%</p>
          <p className="ml-2 text-h4 font-bold">180,000원</p>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
