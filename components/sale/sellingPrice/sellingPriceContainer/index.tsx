'use client';
import BottomSheets from '@/components/common/bottomSheets';
import React from 'react';
import BottomSheetsContent from '../bottomSheetsContent';
import { useRecoilValue } from 'recoil';
import { percentState, priceState } from '@/atoms/sale/priceAtom';

type PropsType = {
  price: number;
};

const SellingPriceContainer = ({ price }: PropsType) => {
  const selectedPrice = useRecoilValue(priceState);
  const selectedPercent = useRecoilValue(percentState);

  const title =
    selectedPrice === 0
      ? '판매가를 선택해주세요'
      : selectedPrice.toLocaleString() + '원';

  const buttonSelect = selectedPrice === 0 ? 'input' : 'price';

  const charge = selectedPrice * 0.05;
  const totalPrice = selectedPrice - charge;

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-h5 font-semibold">판매가 설정</h2>
      <p className="text-p1 opacity-50 mt-1 mb-3">
        구매가의 10% 단위로 할인율을 선택할 수 있어요.
      </p>
      <BottomSheets
        title={title}
        innerTitle="판매가를 선택해주세요."
        buttonSelect={buttonSelect}
        price={selectedPrice}
        percent={selectedPercent}
        outerControl={true}
        outerControlAtom="sale"
      >
        <BottomSheetsContent price={price} />
      </BottomSheets>
      {/* 캐치특가 바텀시트 들어갈 자리 */}
      <div className="mt-8 flex flex-col gap-3 text-p1">
        <div className="flex justify-between">
          <p>판매가</p>
          <div className="flex gap-2 items-center">
            {selectedPrice !== 0 ? (
              <p
                data-testid="percent-badge"
                className="bg-surface-primary text-text-primary rounded px-2 py-1 font-bold text-p2"
              >
                {selectedPercent}%
              </p>
            ) : null}

            <span>{selectedPrice.toLocaleString()}원</span>
          </div>
        </div>
        <div className="flex justify-between">
          <p>거래 수수료율 5%</p>
          <span className="opacity-50">- {charge.toLocaleString()}원</span>
        </div>
        <hr className="border-divider-sub" />
        <div className="flex justify-between">
          <p>정산 예정 금액</p>
          <span className="text-t1 font-semibold">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellingPriceContainer;
