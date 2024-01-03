'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import LeftButtonIcon from './leftButtonIcon';

const LeftButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <LeftButtonIcon />
    </button>
  );
};

export default LeftButton;
