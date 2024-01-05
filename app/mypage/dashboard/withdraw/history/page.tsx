import React from 'react';
import HistoryList from '@/components/mypage/history';

// api 만들어지면 삭제 예정
const userProfile = {
  history: [
    {
      id: 1,
      date: '2021-09-01',
      amount: 100000,
      status: 'pending',
      message: '제주신라호텔 판매 적립',
    },
    {
      id: 2,
      date: '2021-09-01',
      amount: 50000,
      status: 'withdraw',
      message: '예치금 출금',
    },
    {
      id: 3,
      date: '2021-09-01',
      amount: 70000,
      status: 'withdraw',
      message: '예치금 출금',
    },
  ],
};

const page = () => {
  return (
    <div className="w-full h-full mt-5 px-5 flex flex-col gap-5">
      {userProfile.history ? (
        userProfile.history.map((item) => {
          return <HistoryList key={item.id} item={item} />;
        })
      ) : (
        <p>거래 목록이 없습니다.</p>
      )}
    </div>
  );
};

export default page;
