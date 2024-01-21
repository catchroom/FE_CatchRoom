import WithdrawForm from '@/components/mypage/form/withdrawForm';
import React from 'react';
// import { useMyPageQuery } from '@/api/mypage/query';
const userProfile = {
  bank: '신한은행',
  accountNumber: '110-123-456789',
  balance: 1000000,
};

//여기서 문제 : 은행 정보는 따로 받아야함

const Page = () => {
  // const { data } = useMyPageQuery('getAccount'); //수정필요!
  // console.log(data);

  return (
    <div className="w-full h-full flex flex-col p-5 gap-5">
      <div className="flex flex-col">
        <div className="text-t1">
          <strong className="font-semibold">내 계좌</strong>로
        </div>
        <div className="w-full flex gap-1 text-text-sub text-t3">
          <h1>신한은행</h1>
          <p>{userProfile.accountNumber}</p>
        </div>
      </div>
      <WithdrawForm originalBalance={userProfile.balance} />
    </div>
  );
};

export default Page;
