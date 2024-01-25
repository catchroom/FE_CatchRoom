'use client';
import { useRoomItem } from '@/api/room-info/query';
import PinkCheckIcon from '@/public/svgComponent/roomInfo/navbarSection/pinkCheckIcon';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import React from 'react';

const NavAccInfoComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <div className="w-full h-[235px] ">
      {isLoading ? (
        <>
          <div className="flex flex-col w-full h-full items-center justify-center text-p2 bg-gray-400 animate-pulse" />
        </>
      ) : (
        <>
          <p className="text-t1 font-bold mb-3">시설 및 서비스</p>
          <div className="grid grid-cols-2">
            {data?.data.accommodationService.map(
              (data: string[], index: number) => {
                return (
                  <p
                    key={index}
                    className="flex gap-2 items-center text-t3 mb-2 font-normal"
                  >
                    <PinkCheckIcon />
                    {data}
                  </p>
                );
              },
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NavAccInfoComponent;
