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
      className="flex items-center gap-2 h-[2.25rem] bg-white rounded-full border border-border-sub px-3 py-2 text-t3 font-semibold"
    >
      {name}
      <DownArrowIcon width={12} height={7} />
    </button>
  );
};

export default DropdownButton;
