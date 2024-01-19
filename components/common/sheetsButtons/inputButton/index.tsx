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
      data-testid="inputButton"
      onClick={fn}
      type="button"
      className="flex items-center justify-between w-full h-[54px] px-4 py-3 text-text-sub border border-border-sub rounded-md bg-surface outline-none transition-colors duration-300 ease-in focus:border-border-critical"
    >
      {name}
      <DownArrowIcon />
    </button>
  );
};

export default InputButton;
