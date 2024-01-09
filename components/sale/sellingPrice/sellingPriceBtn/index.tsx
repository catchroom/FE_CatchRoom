'use client';
import { Button } from '@material-tailwind/react';
import React from 'react';

type Props = {
  percent: number;
};

const SellingPriceBtn = ({ percent }: Props) => {
  return (
    <div className="relative flex flex-col items-center">
      <Button
        className="relative overflow-visible px-4 py-2 rounded-none bg-gray-200 text-black"
        placeholder="di"
      >
        {percent}%
      </Button>
      {percent >= 50 ? (
        <div className="text-pink-600 border border-pink-600 bg-white flex text-p4 absolute -top-3 z-10 items-center py-1 px-[6.5px] rounded-xl">
          캐치특가
        </div>
      ) : null}
    </div>
  );
};

export default SellingPriceBtn;
