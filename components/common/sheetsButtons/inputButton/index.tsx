'use client';

import React from 'react';

const InputButton = ({ name, fn }: { name: string; fn: () => void }) => {
  const onClick = () => {
    fn();
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-start border-2 border-border-secondary text-t2 font-medium bg-transparent text-text p-4"
    >
      {name}
    </button>
  );
};

export default InputButton;
