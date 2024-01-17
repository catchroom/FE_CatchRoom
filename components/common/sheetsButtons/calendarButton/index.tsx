'use client';

import CalendarIcon from '@/public/svgComponent/calendar';
import React, { MouseEventHandler } from 'react';

const CalendarButton = ({
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
      className="flex items-center gap-2 w-full px-4 py-3 border border-border-sub rounded-md bg-surface outline-none transition-colors duration-300 ease-in focus:border-border-critical"
    >
      <CalendarIcon />
      {name}
    </button>
  );
};

export default CalendarButton;
