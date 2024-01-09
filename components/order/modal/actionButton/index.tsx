import { ActionButtonProps } from '@/types/order/modal/actionButton/type';
import React from 'react';

const ActionButton = ({ action, label, colorClass }: ActionButtonProps) => {
  return (
    <button
      onClick={action}
      className={`flex-grow min-w-[10rem] h-14 py-2.5 px-4 text-center ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
