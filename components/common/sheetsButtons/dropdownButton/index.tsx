'use client';

import DownArrowIcon from '@/public/svgComponent/downArrow';
import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import React, { MouseEventHandler } from 'react';

const DropdownButton = ({
  name,
  fn,
  useLocationIcon,
}: {
  name: string;
  fn: MouseEventHandler<HTMLButtonElement>;
  useLocationIcon?: boolean;
}) => {
  return (
    <button
      onClick={fn}
      type="button"
      className="flex items-center justify-between gap-2 h-[2.25rem] bg-white rounded-full border border-border-sub px-3 py-2 text-t3 font-semibold "
    >
      {useLocationIcon && <MapPinSmFillIcon />}
      {name}
      <div className="flex justify-center items-center">
        <DownArrowIcon width={21} height={21} />
      </div>
    </button>
  );
};

export default DropdownButton;
