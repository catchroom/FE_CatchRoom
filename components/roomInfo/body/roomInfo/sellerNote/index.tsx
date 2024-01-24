'use client';
import { useRoomItem } from '@/api/room-info/query';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import React from 'react';

const SellerNoteComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col w-full items-start justify-center my-6">
          <div className="w-[75px] h-[24px] mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
          <div className="w-[200px] h-[24px] bg-gray-400 rounded-[4px] animate-pulse" />
        </div>
      ) : (
        <>
          {data && data.data.introduction ? (
            <div className="flex flex-col w-full items-start justify-center my-6">
              <p className="text-p2 font-semibold">판매자 한마디</p>
              <div className="w-full mt-2 text-p1 font-medium">
                {data.data.introduction}
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default SellerNoteComponent;
