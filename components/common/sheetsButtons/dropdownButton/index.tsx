'use client';

import DownArrowIcon from '@/public/svgComponent/downArrow';
import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import React, { MouseEventHandler } from 'react';

const DropdownButton = ({
  name,
  fn,
  icon,
}: {
  name: string;
  fn: MouseEventHandler<HTMLButtonElement>;
  icon?: boolean;
}) => {
  return (
    <button
      onClick={fn}
      type="button"
      className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[1.2rem]"
    >
      {icon ? <MapPinSmFillIcon /> : null}
      {name}
      <DownArrowIcon />
    </button>
  );
};

export default DropdownButton;
