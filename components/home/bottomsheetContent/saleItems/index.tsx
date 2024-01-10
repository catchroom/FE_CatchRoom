'use client';

import { getSlashDate } from '@/utils/get-slash-date';
import { Radio } from '@material-tailwind/react';
import React from 'react';

const items = [
  {
    id: 1,
    productName: '제주신라호텔',
    check_In: new Date(),
    check_out: new Date(),
  },
  {
    id: 2,
    productName: '글래드 마포',
    check_In: new Date(),
    check_out: new Date(),
  },
];
const SaleItems = () => {
  return (
    <div className="flex flex-col items-start w-full">
      {items.map((item) => {
        const dateString = getSlashDate(item.check_In, item.check_out);
        return (
          <label key={item.id} className="flex items-center w-full">
            <Radio
              crossOrigin="anonymous"
              type="radio"
              color="pink"
              key={item.id}
              value={item.productName}
            />
            <p className="text-t2 font-semibold">
              {item.productName}{' '}
              <span className="text-text-sub font-normal">{dateString}</span>{' '}
            </p>
          </label>
        );
      })}
    </div>
  );
};

export default SaleItems;
