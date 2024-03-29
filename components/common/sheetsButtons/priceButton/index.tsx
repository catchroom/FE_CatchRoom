'use client';

import Discount from '@/components/sale/discount';
import DownArrowIcon from '@/public/svgComponent/downArrow';
import React, { MouseEventHandler } from 'react';

const PriceButton = ({
  fn,
  price,
  percent,
}: {
  fn: MouseEventHandler<HTMLButtonElement>;
  price?: number;
  percent?: number;
}) => {
  return (
    <button
      data-testid="priceButton"
      onClick={fn}
      type="button"
      className="flex items-center justify-between w-full h-[54px] px-4 py-3 border border-border-sub rounded-md bg-surface outline-none transition-colors duration-300 ease-in"
    >
      <div className="flex gap-2 items-center">
        <Discount percent={percent} />
        {price?.toLocaleString()}원
      </div>

      <DownArrowIcon />
    </button>
  );
};

export default PriceButton;
