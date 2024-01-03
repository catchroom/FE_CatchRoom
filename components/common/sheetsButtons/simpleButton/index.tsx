'use client';

import React, { MouseEventHandler } from 'react';
import { Button } from '@material-tailwind/react';

const SimpleButton = ({
  name,
  fn,
  type = 'button',
}: {
  name: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fn?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      placeholder="Button"
      onClick={fn}
      type={type}
      className="bg-focus w-full font-pretend text-t2 font-medium text-text-on p-4"
    >
      {name}
    </Button>
  );
};

export default SimpleButton;
