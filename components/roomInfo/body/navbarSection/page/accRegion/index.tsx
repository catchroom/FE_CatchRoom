'use client';
import { useRoomItem } from '@/api/room-info/query';
import { useToastAlert } from '@/hooks/useToastAlert';
import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
import React from 'react';
import RoomMap from './roomMap';

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
        {/* 카카오 지도 */}
        <RoomMap
          latitude={data?.data.latitude}
          longitude={data?.data.longitude}
        />
      </div>
      {/* 복사 가능한 숙소 주소 */}
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
