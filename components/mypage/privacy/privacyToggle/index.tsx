'use client';

import SlideButton from '@/components/common/slideButton';
import React, { useState } from 'react';

const PrivacyToggle = ({ title }: { title: string }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-t2">{title}</h1>
      <SlideButton isButtonActive={toggle} stateHandler={toggleHandler} />
    </div>
  );
};

export default PrivacyToggle;
