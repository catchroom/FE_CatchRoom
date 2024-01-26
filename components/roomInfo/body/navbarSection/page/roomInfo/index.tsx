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
  const { data, isLoading, error } = useRoomItem(id);

  return (
    <>
      <div className="relative  h-[12.5rem]">
        {isLoading ? (
          <>
            <div className="max-w-[440px] h-full mb-2 bg-gray-400 rounded-[4px] animate-pulse" />
          </>
        ) : !error ? (
          <>
            {data?.data.roomUrl && (
              <Image
                src={data.data.roomUrl[0].url}
                layout="fill"
                objectFit="cover"
                alt="객실사진"
                className="rounded-md"
              />
            )}
          </>
        ) : (
          <>
            <div className="flex flex-shrink-0 items-center justify-center w-full h-full overflow-hidden rounded-md mr-4 bg-gray-300">
              <svg
                className="flex items-center justify-center text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="-15 0 50 18"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
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
            기준 {data?.data.roomNormalCapacity}인 / 최대{' '}
            {data?.data.roomMaxCapacity}인
          </p>
          <p className="flex items-center gap-1 text-p3 text-text-sub">
            <SmBedIcon />퀸 침대
            {data && Math.round(data.data.roomNormalCapacity / 2)}개
          </p>
        </div>
      </div>
    </>
  );
};

export default NavRoomInfoComponent;
