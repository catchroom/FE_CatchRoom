import React from 'react';

const SellingPriceContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-h5 font-semibold">판매가 설정</h2>
      <p className="text-p1 opacity-50 mt-1">
        구매가 대비 할인율을 설정해주세요
      </p>
      {/* 캐치특가 바텀시트 들어갈 자리 */}
      <div className="mt-8 flex flex-col gap-3 text-p1">
        <div className="flex justify-between">
          <p>판매 금액</p>
          <div className="flex gap-2 items-center">
            <p className="bg-surface-primary text-text-primary rounded px-2 py-1 font-bold text-p2">
              30%
            </p>
            <span>0원</span>
          </div>
        </div>
        <div className="flex justify-between">
          <p>거래 수수료율 5%</p>
          <span className="opacity-50">- 0원</span>
        </div>
        <hr className="border-divider-sub" />
        <div className="flex justify-between">
          <p>최종 정산금액</p>
          <span className="text-t1 font-semibold">0원</span>
        </div>
      </div>
    </div>
  );
};

export default SellingPriceContainer;
