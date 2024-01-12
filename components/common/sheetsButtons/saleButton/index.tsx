'use client';

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

const SaleButton = ({
  name,
  fn,
  type = 'button',
}: {
  name: string;
  fn?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <Button
      placeholder="Button"
      onClick={fn}
      type={type}
      className="flex gap-1 p-3 rounded-3xl font-pretend bg-main text-t2 font-bold text-white"
    >
      <Image src="/svg/plus.svg" width={24} height={24} alt="플러스 아이콘" />
      {name}
    </Button>
  );
};

export default SaleButton;
