'use client';

import React from 'react';
import { Button } from '@material-tailwind/react';

const SimpleButton = ({ name, fn }: { name: string; fn: () => void }) => {
  const onClick = () => {
    fn();
  };

  return (
    <Button
      placeholder="Button"
      onClick={onClick}
      type="button"
      className=" bg-focus font-pretend text-t2 font-medium text-text-on p-4"
    >
      {name}
    </Button>
  );
};

export default SimpleButton;
