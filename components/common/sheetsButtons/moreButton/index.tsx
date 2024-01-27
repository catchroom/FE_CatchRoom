'use client';

import MoreIcon from '@/public/svgComponent/moreIcon';
import React, { MouseEventHandler } from 'react';

const MoreButton = ({ fn }: { fn: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={fn} className="w-4 flex justify-center">
      <MoreIcon />
    </div>
  );
};

export default MoreButton;
