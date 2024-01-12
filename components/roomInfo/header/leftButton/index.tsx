'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import LeftButtonIcon from './leftButtonIcon';

const LeftButton = () => {
  const router = useRouter();

  const backPageHandler = () => {
    router.back();
  };

  return (
    <button
      className="flex items-center justify-center w-[1.75rem] h-[1.75rem] "
      onClick={backPageHandler}
    >
      <LeftButtonIcon />
    </button>
  );
};

export default LeftButton;
