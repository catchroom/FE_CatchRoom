import React from 'react';
import HistoryList from '@/components/mypage/history';

// api 만들어지면 삭제 예정
const userProfile = {
  depositList: [
    {
      date: '2021-09-01',
      totalNum: 100000,
      type: '입금',
      productName: '제주신라호텔',
    },
    {
      date: '2021-09-01',
      totalNum: 50000,
      type: '출금',
      productName: '예치금',
    },
    {
      date: '2021-09-01',
      totalNum: 70000,
      type: '출금',
      productName: '예치금',
    },
  ],
};

const page = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      {userProfile.depositList ? (
        userProfile.depositList.map((item) => {
          return <HistoryList key={item.productName} item={item} />;
        })
      ) : (
        <p>거래 목록이 없습니다.</p>
      )}
    </div>
  );
};

export default page;
