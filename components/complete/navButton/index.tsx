import { ActionButtonProps } from '@/types/order/modal/actionButton/type';
import React from 'react';

const NavButton = ({ label, colorClass }: ActionButtonProps) => {
  return (
    <button
      className={`w-full flex-grow min-w-[10rem] h-14 py-2.5 px-4 rounded text-center font-semibold ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default NavButton;
