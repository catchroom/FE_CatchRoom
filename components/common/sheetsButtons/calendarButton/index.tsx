'use client';

import ClockSVG from '@/public/svgComponent/clock';
import React, { MouseEventHandler } from 'react';

const TimePickerButton = ({
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
      className="flex items-center gap-2 h-[54px] w-full px-4 py-3 border border-border-sub rounded-md bg-surface outline-none transition-colors duration-300 ease-in focus:border-border-critical"
    >
      <ClockSVG />
      {name}
    </button>
  );
};

export default TimePickerButton;
