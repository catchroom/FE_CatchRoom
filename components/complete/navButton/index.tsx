import { ActionButtonProps } from '@/types/order/modal/actionButton/type';
import React from 'react';

const NavButton = ({ label, colorClass, onClick }: ActionButtonProps) => {
  return (
    <button
      className={`w-full flex-grow min-w-[10rem] h-[2.75rem] py-2.5 px-4 rounded text-center font-semibold ${colorClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavButton;
