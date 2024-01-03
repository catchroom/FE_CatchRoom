import { ActionButtonProps } from '@/types/order/modal/actionButton/type';
import React from 'react';

const ActionButton = ({ action, label, colorClass }: ActionButtonProps) => {
  return (
    <button
      onClick={action}
      className={`font-bold py-2 px-4 w-32 text-center ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
