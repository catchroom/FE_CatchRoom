import { ButtonProps, Theme } from '@/types/chat/defaultBtn/types';
import React from 'react';

const themes: Theme = {
  basic: {
    backgroundColor: 'bg-white',
    color: 'text-black',
    borderColor: 'border border-gray-600',
    width: 'w-2/6 ml-auto',
  },
  primary: {
    backgroundColor: 'bg-main',
    color: 'text-white',
    fontWeight: 'font-bold',
    width: 'w-full',
  },
  secondary: {
    backgroundColor: 'bg-white',
    color: 'text-main',
    borderColor: 'border border-main',
    fontWeight: 'font-bold',
    width: 'w-full',
  },
};

const defaultBtn = (props: ButtonProps) => {
  const theme = themes[props.theme] || themes.basic;

  return (
    <button
      className={`rounded-sm w-full text-p2 px-3 py-2 
      ${theme.backgroundColor} 
      ${theme.color} 
      ${theme.borderColor ? theme.borderColor : ''}
      ${theme.fontWeight ? theme.fontWeight : ''}
      ${theme.width} 
      `}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default defaultBtn;
