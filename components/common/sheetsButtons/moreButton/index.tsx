'use client';

import MoreIcon from '@/public/svgComponent/moreIcon';
import React, { MouseEventHandler } from 'react';

const MoreButton = ({ fn }: { fn: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={fn}>
      <MoreIcon />
    </div>
  );
};

export default MoreButton;
