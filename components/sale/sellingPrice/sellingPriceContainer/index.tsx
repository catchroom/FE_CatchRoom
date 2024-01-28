'use client';
import BottomSheets from '@/components/common/bottomSheets';
import React, { useEffect } from 'react';
import BottomSheetsContent from '../bottomSheetsContent';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  percentState,
  priceState,
  productPriceState,
  totalPriceState,
} from '@/atoms/sale/priceAtom';
import { isCatchPriceState } from '@/atoms/sale/catchAtom';
import { getNumberWithRounds } from '@/utils/get-number-with-rounds';

const SellingPriceContainer = () => {
  const price = useRecoilValue(productPriceState);
  const selectedPrice = useRecoilValue(priceState);
  const selectedPercent = useRecoilValue(percentState);
  const setIsCatchPrice = useSetRecoilState(isCatchPriceState);
  const setTotalPrice = useSetRecoilState(totalPriceState);

  console.log(selectedPrice);

  const title =
    selectedPrice === 0
      ? '판매가를 선택해주세요'
      : selectedPrice.toLocaleString() + '원';

  const buttonSelect = selectedPrice === 0 ? 'input' : 'price';

  const charge = selectedPercent < 50 ? selectedPrice * 0.05 : 0;
  const chargeRounds = getNumberWithRounds(charge);
  const totalPrice = selectedPrice - chargeRounds;

  useEffect(() => {
    setTotalPrice(totalPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPrice]);

  useEffect(() => {
    if (selectedPercent >= 50) setIsCatchPrice(true);
  }, [selectedPercent, setIsCatchPrice]);

  return (
    <div className="flex flex-col w-full">
      <h2 className="lg:text-h5 font-semibold md:text-t1 sm:text-t1">
        판매가 설정
      </h2>
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
          <span className="opacity-50">
            - {chargeRounds.toLocaleString()}원
          </span>
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
