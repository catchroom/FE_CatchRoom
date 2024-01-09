'use client';

import ToggleButton from '@/components/common/toggleButton';
import React from 'react';

const PrivacyToggle = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-t2">{title}</h1>
      <ToggleButton />
    </div>
  );
};

export default PrivacyToggle;
