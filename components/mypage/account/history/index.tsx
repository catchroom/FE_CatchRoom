'use client';
import React from 'react';
import HistoryList from '@/components/mypage/history';
import { useQueryGetDetail } from '@/api/mypage/query';

const DepositHistory = () => {
  const { data } = useQueryGetDetail();

  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      {data ? (
        data.map(
          (item: {
            id: number;
            date: string;
            money: number;
            type: string;
            info: string;
          }) => {
            return <HistoryList key={item.id} item={item} />;
          },
        )
      ) : (
        <p>거래 목록이 없습니다.</p>
      )}
    </div>
  );
};

export default DepositHistory;
