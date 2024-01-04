import { getDotDate } from '@/utils/get-dot-date';
import React from 'react';

const HistoryList = ({
  item,
}: {
  item: {
    id: number;
    date: string;
    amount: number;
    status: string;
    message: string;
  };
}) => {
  return (
    <div className="w-full gap-3 flex flex-col" key={item.id}>
      <div className="w-full flex items-center gap-3">
        <p className=" text-t1">{getDotDate(item.date)}</p>
        <p>{item.status === 'withdraw' ? '(출금한 날짜)' : '(적립된 날짜)'}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-t1">
          <span>{item.status === 'withdraw' ? '- ' : '+ '}</span>
          {item.amount}원
        </div>
        <p className=" text-text-sub text-p2">{item.message}</p>
      </div>
    </div>
  );
};

export default HistoryList;
