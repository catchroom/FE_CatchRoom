'use client';
import React from 'react';
import RateIcon from './rateIcon';
import { useParams } from 'next/navigation';
import { useRoomItem } from '@/api/room-info/query';
import { UseParamsType } from '@/types/room-info/types';

const ItemDetailComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <div>
      <div className="flex flex-col items-start">
        {isLoading ? (
          <>
            <div className="w-[180px] h-[24px] mb-1 bg-gray-400 rounded-[4px] animate-pulse" />
            <div className="w-[78px] h-[24px] mb-1 bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : (
          <>
            <p className="text-h4 font-extrabold">
              {data && data.data.accommodationName}
            </p>
            <p className="text-t2 font-semibold text-text-sub">
              {data && data.data.roomType}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-start mt-2">
        {isLoading ? (
          <>
            <div className="w-[42px] h-[24px] bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : (
          <>
            <RateIcon />
            <p className="text-t3 text-black font-medium ml-1">
              {data && data.data.star}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetailComponent;
