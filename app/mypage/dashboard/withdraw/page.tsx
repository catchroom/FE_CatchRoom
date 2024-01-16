import WithdrawForm from '@/components/mypage/form/withdrawForm';
import React from 'react';

const userProfile = {
  bank: '신한은행',
  account: '110-123-456789',
  balance: 1000000,
};

const page = () => {
  return (
    <div className="w-full h-full flex flex-col p-5 gap-5">
      <div className="flex flex-col">
        <div className="text-t1">
          <strong className="font-semibold">내 계좌</strong>로
        </div>
        <div className="w-full flex gap-1 text-text-sub text-t3">
          <h1>{userProfile.bank}</h1>
          <p>{userProfile.account}</p>
        </div>
      </div>
      <WithdrawForm originalBalance={userProfile.balance} />
    </div>
  );
};

export default page;
