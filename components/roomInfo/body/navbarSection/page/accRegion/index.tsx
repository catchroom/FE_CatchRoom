'use client';
import { useRoomItem } from '@/api/room-info/query';
import { useToastAlert } from '@/hooks/useToastAlert';
import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import { UseParamsType } from '@/types/room-info/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const NavAccRegionComponent = () => {
  const { id } = useParams() as UseParamsType;
  const { data } = useRoomItem(id);

  const address = data?.data.address;

  const { alertOpenHandler } = useToastAlert('주소를 복사했어요!');

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alertOpenHandler();
    } catch (e) {
      console.error('Failed to copy address');
    }
  };

  return (
    <div className="w-full h-[235px]">
      <div className="relative w-full h-[205px] ">
        {/* 카카오 지도 들어갈 자리 */}
        {/* {data && data.data.latitude} 위도 */}
        {/* {data && data.data.longitude} 경도 */}
        <Image
          src="/sample/map.png"
          layout="fill"
          objectFit="cover"
          alt="숙소사진"
        />
      </div>
      <div className="flex flex-wrap w-full justify-between text-p2 mt-3">
        <div className="flex flex-wrap items-center gap-1">
          <MapPinSmFillIcon />
          <p className="text-t3 font-semibold">{address}</p>
        </div>
        <button
          className="underline text-p2 text-text-primary font-semibold"
          onClick={() => copyHandler()}
        >
          복사
        </button>
      </div>
    </div>
  );
};

export default NavAccRegionComponent;
