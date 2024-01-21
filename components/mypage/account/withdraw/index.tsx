'use client';

import WithdrawForm from '@/components/mypage/form/withdrawForm';
import React from 'react';
import { useQueryGetAccount } from '@/api/mypage/query';

//여기서 문제 : 은행 정보는 따로 받아야함

const WithDraw = () => {
  const { data } = useQueryGetAccount(); //수정필요!
  console.log(data);

  return (
    <div className="w-full h-full flex flex-col p-5 gap-5">
      <div className="flex flex-col">
        <div className="text-t1">
          <strong className="font-semibold">내 계좌</strong>로
        </div>
        <div className="w-full flex gap-1 text-text-sub text-t3">
          <h1>은행데이터도 주세요</h1>
          <p>{data?.accountNumber}</p>
        </div>
      </div>
      <WithdrawForm originalBalance={data?.balance} />
    </div>
  );
};

export default WithDraw;
