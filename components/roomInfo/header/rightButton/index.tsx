'use client';

import HeartButton from '@/components/common/heartButton';
import React, { useState } from 'react';

const RightButton = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="flex items-center">
        <HeartButton isButtonActive={isActive} stateHandler={activeHandler} />
      </div>
    </>
  );
};

export default RightButton;
