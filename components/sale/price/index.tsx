import React from 'react';

const Price = () => {
  return (
    <div className="w-[355px] mt-5 flex flex-col gap-3 text-p1">
      <div className="flex justify-between">
        <p>판매가</p>
        <span>0원</span>
      </div>
      <div className="flex justify-between">
        <p>- 거래 수수료율 5%</p>
        <span>0원</span>
      </div>
      <hr className="border-black" />
      <div className="flex justify-between">
        <p>최종 정산금액</p>
        <span className="text-h2 font-bold">0원</span>
      </div>
    </div>
  );
};

export default Price;
