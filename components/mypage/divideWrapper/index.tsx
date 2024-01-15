'use client';

import { divideAtom } from '@/atoms/mypage/divideAtom';
import { BANK_LIST, INVESTMENT_BANK_LIST } from '@/constants/mypage';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useRecoilState } from 'recoil';

export const DIVIDE_LIST = {
  BANK: [
    {
      title: '은행',
      view: true,
      list: BANK_LIST,
    },
    {
      title: '증권사',
      view: false,
      list: INVESTMENT_BANK_LIST,
    },
  ],
  SALE: [
    {
      title: '게시중',
      view: true,
    },
    {
      title: '게시만료',
      view: false,
    },
  ],
};

type DivideCase = keyof typeof DIVIDE_LIST;

const DivideWrapper = ({
  children,
  divideCase,
}: {
  children: ReactNode;
  divideCase: DivideCase;
}) => {
  const [value, setValue] = useRecoilState(divideAtom);
  const VIEW_DATA = DIVIDE_LIST[divideCase];

  const onClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setValue((prev) => !prev);
  };

  const returnStyle = (value: boolean, view: boolean) => {
    return value === view
      ? 'border-border-secondary text-text'
      : ' border-divide-sub text-text-secondary';
  };

  const defaultStyle = 'border-b p-4 w-1/2 transition-colors duration-300';

  return (
    <div className="w-full">
      <div className="flex justify-around w-full font-semibold text-t2">
        {VIEW_DATA.map((data) => {
          return (
            <button
              key={data.title}
              className={`${returnStyle(value, data.view)} ${defaultStyle}`}
              onClick={onClick}
            >
              {data.title}
            </button>
          );
        })}
      </div>
      <div className="max-h-[calc(100vh-120px)] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default DivideWrapper;
