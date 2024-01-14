'use client';
import React from 'react';
import Discount from '../../discount';
import CatchBadge from '../../catchBadge';
import { useSetRecoilState } from 'recoil';
import { percentState, priceState } from '@/atoms/sale/priceAtom';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';

type PropsType = {
  price: number;
};
const BottomSheetsContent = ({ price }: PropsType) => {
  const setSelectPrice = useSetRecoilState(priceState);
  const setSelectPercent = useSetRecoilState(percentState);
  const setBankModal = useSetRecoilState(outerBottomSheetsControl);

  const discount: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const handlePriceClick = (discountedPrice: number, percent: number) => {
    setSelectPrice(discountedPrice);
    setSelectPercent(percent);
    setBankModal(false);
  };
  return (
    <div className="flex flex-col gap-8 h-[calc(100vh-200px)] overflow-y-scroll">
      <div>
        {discount.map((percent) => {
          const discountedPrice = price * ((100 - percent) / 100);
          return (
            <div
              key={percent}
              className="flex w-full relative gap-2 py-3 cursor-pointer "
              onClick={() => handlePriceClick(discountedPrice, percent)}
            >
              <Discount percent={percent} />
              <div className="text-t2">
                {discountedPrice.toLocaleString()}원
              </div>
              {percent >= 50 ? (
                <div className="absolute right-0">
                  <CatchBadge />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2.5 px-4 py-3 rounded bg-surface-sub border border-border-sub">
        <p className="text-t1 font-bold text-text-primary">캐치특가란?</p>
        <p className="text-p2 text-text-sub">
          구매가 대비 50% 이상 할인율 설정시 홈 상단에 노출되며 판매
          수수료(5%)가 면제됩니다.
        </p>
      </div>
    </div>
  );
};

export default BottomSheetsContent;
