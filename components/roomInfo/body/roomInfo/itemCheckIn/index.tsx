'use client';
import { useRoomItem } from '@/api/room-info/query';
import CheckInDateComponent from '@/components/common/checkInDateComponent';
import { UseParamsType } from '@/types/room-info/types';
import { getDotDate } from '@/utils/get-dot-date';
import { useParams } from 'next/navigation';
import React from 'react';

const ItemCheckInComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <>
      {isLoading ? (
        <div className="relative flex flex-wrap w-full h-[5.625rem] mt-2 items-center justify-around bg-gray-400 rounded-[4px] animate-pulse"></div>
      ) : (
        <CheckInDateComponent
          CheckInDate={getDotDate(`${data && data.data.checkIn}`, false, false)}
          CheckOutDate={getDotDate(
            `${data && data.data.checkOut}`,
            false,
            true,
          )}
        />
      )}
    </>
  );
};

export default ItemCheckInComponent;
