'use client';
import { useRoomItem } from '@/api/room-info/query';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import React from 'react';

// 구매가, 할인율, 할인된 가격 필요.
const PriceComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <div className=" py-5 border-b border-divider-sub">
      <div className="flex flex-wrap items-center justify-between ">
        {isLoading ? (
          <>
            <div className="w-[42px] h-[24px] mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
            <div className="w-[78px] h-[24px] mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : (
          <>
            <span className="text-t2 font-normal">구매가</span>
            <p className="text-t2 text-gray-600  font-semibold">
              {data?.data.originalPrice?.toLocaleString()}원
            </p>
          </>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between">
        {isLoading ? (
          <>
            <div className="w-[42px] h-[24px] bg-gray-400 rounded-[4px] animate-pulse" />
            <div className="w-[150px] h-[24px] bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : (
          <>
            <span className="text-t2 font-normal">판매가</span>
            <div className="flex flex-wrap items-center justify-center">
              <p className=" text-main font-bold">
                {data && data.data.discountRate}%
              </p>
              <p className="ml-2 text-h4 font-bold">
                {data?.data.sellPrice?.toLocaleString()}원
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceComponent;
