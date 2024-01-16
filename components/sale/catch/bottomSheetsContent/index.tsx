'use client';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { outerCatchBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import Discount from '../../discount';
import CatchBadge from '../../catchBadge';
import { catchPercentState, catchPriceState } from '@/atoms/sale/catchAtom';

type PropsType = {
  price: number;
};
const BottomSheetsContent = ({ price }: PropsType) => {
  const setSelectCatchPrice = useSetRecoilState(catchPriceState);
  const setSelectCatchPercent = useSetRecoilState(catchPercentState);
  const setModalOpen = useSetRecoilState(outerCatchBottomSheetsControl);

  const discount: number[] = [50, 60, 70, 80, 90];

  const handlePriceClick = (discountedPrice: number, percent: number) => {
    setSelectCatchPrice(discountedPrice);
    setSelectCatchPercent(percent);
    setModalOpen(false);
  };
  return (
    <div className=" flex flex-col gap-8 ">
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
              <div className="absolute right-0">
                <CatchBadge />
              </div>
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
