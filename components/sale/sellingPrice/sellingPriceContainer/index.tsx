import BottomSheets from '@/components/common/bottomSheets';
import React from 'react';
import BottomSheetsContent from '../../bottomSheetsContent';

type PropsType = {
  price: number;
};

const SellingPriceContainer = ({ price }: PropsType) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-h5 font-semibold">판매가 설정</h2>
      <p className="text-p1 opacity-50 mt-1 mb-3">
        구매가 대비 할인율을 설정해주세요
      </p>
      <BottomSheets
        title="판매 금액을 선택해주세요"
        innerTitle="판매 금액을 선택해주세요"
        buttonSelect="input"
      >
        <BottomSheetsContent price={price} />
      </BottomSheets>
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
