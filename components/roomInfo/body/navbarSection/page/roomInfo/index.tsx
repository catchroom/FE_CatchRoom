'use client';
import { useRoomItem } from '@/api/room-info/query';
import SmBedIcon from '@/public/svgComponent/roomInfo/navbarSection/bedIconSm';
import SmPersonIcon from '@/public/svgComponent/roomInfo/navbarSection/personIconSm';
import { UseParamsType } from '@/types/room-info/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const NavRoomInfoComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  return (
    <>
      <div className="relative  h-[12.5rem]">
        {isLoading ? (
          <>
            <div className="max-w-[440px] h-full mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : (
          <>
            {data && data.data.roomUrl && (
              <Image
                src={data.data.roomUrl[0].url}
                layout="fill"
                objectFit="cover"
                alt="객실사진"
                className="rounded-md"
              />
            )}
          </>
        )}
      </div>
      <div className="flex flex-col mt-2 gap-1">
        <div>
          <p className="text-t2 font-bold leading-5">
            {data && data.data.roomType}
          </p>
          <p className="text-p3 font-semibold">ROOM ONLY</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-p3 text-text-sub leading-5">
            <SmPersonIcon />
            기준 {data && data.data.roomNormalCapacity}인 / 최대
            {data && data.data.roomMaxCapacity}
          </p>
          <p className="flex items-center gap-1 text-p3 text-text-sub">
            <SmBedIcon />퀸 침대 1개
          </p>
        </div>
      </div>
    </>
  );
};

export default NavRoomInfoComponent;
