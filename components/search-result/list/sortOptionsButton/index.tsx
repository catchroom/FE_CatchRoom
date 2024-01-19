'use client';

import DownArrowIcon from '@/public/svgComponent/downArrow';
import React, { MouseEventHandler } from 'react';

const SortOptionsButton = ({
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
      className="flex  items-center justify-between gap-1 text-t3 font-semibold"
    >
      {name}
      <DownArrowIcon width={12} height={7} />
    </button>
  );
};

export default SortOptionsButton;
