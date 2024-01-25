'use client';

import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

const SimpleButton = ({
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
    ? 'bg-action-secondary-disabled text-text-disabled'
    : 'bg-action-primary text-text-on';

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      data-testid="sampleButton"
      onClick={fn}
      disabled={disabled}
      type={type}
      className={`${disabledStyle} w-full text-t2 font-medium p-4 py-2.5 rounded-md transition-colors duration-300 ease-in`}
    >
      {name}
    </motion.button>
  );
};

export default SimpleButton;
