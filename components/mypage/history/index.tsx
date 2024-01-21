import { getDotDate } from '@/utils/get-dot-date';
import React from 'react';

const HistoryList = ({
  item,
}: {
  item: {
    id: number;
    date: string;
    money: number;
    type: string;
    info: string;
  };
}) => {
  const isWithdraw = item.type === '출금';
  const returnWord = isWithdraw ? ' 출금' : ' 판매적립';

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex items-center">
        <p className="text-t3">{getDotDate(item.date, true, false)}</p>
      </div>
      <div className="flex justify-between items-center text-p2 font-semibold">
        <p className={`text-text`}>
          {item.info}
          {returnWord}
        </p>
        <div className={`${isWithdraw ? 'text-text-primary' : 'text-text'}`}>
          <span>{isWithdraw ? '- ' : '+ '}</span>
          {item.money.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
