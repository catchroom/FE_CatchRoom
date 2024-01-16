'use client';

import DownArrowIcon from '@/public/svgComponent/downArrow';
import React, { MouseEventHandler } from 'react';

const DropdownButton = ({
  name,
  fn,
}: {
  name: string;
  fn: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={fn}
      type="button"
      className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[1.2rem]"
    >
      {name}
      <DownArrowIcon />
    </button>
  );
};

export default DropdownButton;
