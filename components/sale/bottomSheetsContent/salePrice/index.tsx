import React from 'react';
import Discount from '../../discount';
import CatchBadge from '../../catchBadge';

type PropsType = {
  price: number;
  isCatch?: boolean;
};
const SalePrice = ({ price, isCatch }: PropsType) => {
  const discount: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const filteredDiscounts = isCatch
    ? discount.filter((d) => d >= 50)
    : discount;
  return (
    <div
      className={`flex flex-col gap-8 ${
        isCatch ? '' : 'h-[calc(100vh-200px)] overflow-y-scroll'
      }`}
    >
      <div>
        {filteredDiscounts.map((percent) => {
          const discountedPrice = price * ((100 - percent) / 100);
          return (
            <div
              key={percent}
              className="flex w-full relative gap-2 py-3 cursor-pointer "
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

export default SalePrice;
