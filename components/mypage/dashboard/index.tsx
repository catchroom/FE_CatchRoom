'use client';
import PurchasingItems from '@/components/mypage/items/purchasingItems';
import { MypageSellingType } from '@/types/mypage/data-types';
import { useQueryGetPurchaseHistory } from '@/api/mypage/query';
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
    isReview: 'onReview',
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
    isReview: 'outDatedReview',
  },
  {
    accommodationId: 'string',
    historyId: '1234',
    productNum: 'string',
    checkIn: '2024-12-15',
    checkOut: '2024-12-17',
    productName: '도래미파 하우스',
    thumbnailUrl:
      'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    sellPrice: 70000,
    state: 'purchased',
    writeDate: '2024-09-01',
    productEndDate: '2024-10-01',
    isCatch: false,
    isReview: 'noReview',
  },
];

const PurchaseList = () => {
  const { data } = useQueryGetPurchaseHistory();
  console.log(data);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-100px)] overflow-y-scroll gap-3">
      {data && data.length > 0
        ? data.map((example, index) => (
            <PurchasingItems key={index} item={example} />
          ))
        : //더미데이터로 리뷰 테스트 위해서
          examplesWithDummyData.map((example, index) => (
            <>
              <div>데이터가 없어서 테스트 더미데티어 사용중입니다</div>
              <PurchasingItems key={index} item={example} />
            </>
          ))}
    </div>
  );
};

export default PurchaseList;
