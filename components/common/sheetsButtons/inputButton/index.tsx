'use client';

import DownArrowIcon from '@/public/svgComponent/downArrow';
import React, { MouseEventHandler } from 'react';

const InputButton = ({
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
      className="w-full flex items-center justify-between border-[1px] border-border-secondary text-t2 font-medium bg-transparent text-text p-4"
    >
      {name}
      <DownArrowIcon />
    </button>
  );
};

export default InputButton;
