'use client';

import MoreIcon from '@/public/svgComponent/moreIcon';
import React, { MouseEventHandler } from 'react';

const MoreButton = ({ fn }: { fn: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button onClick={fn}>
      <MoreIcon />
    </button>
  );
};

export default MoreButton;
