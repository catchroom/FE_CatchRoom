'use client';

import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

const BorderButton = ({
  name,
  fn,
  disabled = false,
  type = 'button',
}: {
  name: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fn?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const disabledStyle = disabled
    ? 'bg-surface-gray text-text-sub'
    : 'border border-border-primary text-text-primary';

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      data-testid="sampleButton"
      onClick={fn}
      type={type}
      className={`${disabledStyle} w-full text-t3 p-1 h-9 rounded-md transition-colors duration-300 ease-in`}
    >
      {name}
    </motion.button>
  );
};

export default BorderButton;
