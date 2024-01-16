import { getDotDate } from '@/utils/get-dot-date';
import React from 'react';

const HistoryList = ({
  item,
}: {
  item: {
    date: string;
    totalNum: number;
    type: string;
    productName: string;
  };
}) => {
  const isWithdraw = item.type === '출금';
  const returnWord = isWithdraw ? ' 출금' : ' 판매적립';

  return (
    <div className="w-full gap-3 flex flex-col">
      <div className="w-full flex items-center gap-3">
        <p className="text-t3">{getDotDate(item.date, true, true)}</p>
      </div>
      <div className="flex justify-between items-center text-p2 font-semibold">
        <p className={`text-text`}>
          {item.productName}
          {returnWord}
        </p>
        <div className={`${isWithdraw ? 'text-text-primary' : 'text-text'}`}>
          <span>{isWithdraw ? '- ' : '+ '}</span>
          {item.totalNum.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
