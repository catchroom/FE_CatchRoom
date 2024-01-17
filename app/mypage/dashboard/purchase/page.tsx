import PurchasingItems from '@/components/mypage/items/purchasingItems';
import { MypageSellingType } from '@/types/mypage/data-types';
import React from 'react';

const examplesWithDummyData: MypageSellingType[] = [
  {
    accommodationId: 'string',
    historyId: 'string',
    productNum: 'string',
    checkIn: '2022-08-15',
    checkOut: '2022-08-17',
    productName: '모시모텔',
    thumbnailUrl:
      'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    sellPrice: 70000,
    state: 'purchased',
    writeDate: '2021-09-01',
    productEndDate: '2024-01-01',
    isCatch: true,
    isReview: true,
  },
  {
    accommodationId: 'string',
    historyId: 'string',
    productNum: 'string',
    checkIn: '2024-12-15',
    checkOut: '2024-12-17',
    productName: '계곡 게스트하우스',
    thumbnailUrl:
      'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    sellPrice: 70000,
    state: 'purchased',
    writeDate: '2024-09-01',
    productEndDate: '2024-10-01',
    isCatch: false,
    isReview: false,
  },
];

const page = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-100px)] overflow-y-scroll gap-3">
      {examplesWithDummyData.map((example, index) => {
        return <PurchasingItems key={index} item={example} />;
      })}
    </div>
  );
};

export default page;
