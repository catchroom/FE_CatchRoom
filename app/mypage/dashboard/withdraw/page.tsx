import WithdrawForm from '@/components/mypage/form/withdrawForm';
import React from 'react';

const userProfile = {
  bank: '신한은행',
  account: '110-123-456789',
  balance: 1000000,
};

const page = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="flex gap-3">
        <h1>{userProfile.bank}</h1>
        <p>{userProfile.account}</p>
      </div>
      <WithdrawForm originalBalance={userProfile.balance} />
      <p>출금가능 금액 : {userProfile.balance}원</p>
    </div>
  );
};

export default page;
