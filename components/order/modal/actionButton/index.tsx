import { ActionButtonProps } from '@/types/order/modal/actionButton/type';
import React from 'react';

const ActionButton = ({ action, label, colorClass }: ActionButtonProps) => {
  return (
    <button
      onClick={action}
      className={`flex-grow min-w-[9.5rem] h-11 py-2.5 px-4 rounded text-center font-semibold ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
