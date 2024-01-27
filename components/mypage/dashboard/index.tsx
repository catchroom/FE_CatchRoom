'use client';
import PurchasingItems from '@/components/mypage/items/purchasingItems';
import { useQueryGetPurchaseHistory } from '@/api/mypage/query';
import React from 'react';
import { MypagePurchaseType } from '@/types/mypage/data-types';
import PurchasingItemsSkeleton from './skeleton';

const PurchaseList = () => {
  const { data, isLoading } = useQueryGetPurchaseHistory();

  if (isLoading) return <PurchasingItemsSkeleton />;

  return (
    <div className="flex flex-col w-full h-[calc(100vh-100px)] overflow-y-scroll gap-3">
      {data &&
        data.map(
          (
            example: MypagePurchaseType,
            index: React.Key | null | undefined,
          ) => <PurchasingItems key={index} item={example} />,
        )}
    </div>
  );
};

export default PurchaseList;
