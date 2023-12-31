'use client';

import React, { MouseEventHandler } from 'react';

const InputButton = ({
  name,
  fn,
  watchBank,
}: {
  watchBank?: string;
  name: string;
  fn: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={fn}
      type="button"
      className="flex w-full justify-between border-[1px] border-border-secondary text-t2 font-medium bg-transparent text-text p-4"
    >
      {name}
      {watchBank && <p className="text-text-primary">{watchBank}</p>}
    </button>
  );
};

export default InputButton;
