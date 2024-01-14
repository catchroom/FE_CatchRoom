import SmBedIcon from '@/public/svgComponent/roomInfo/navbarSection/bedIconSm';
import SmPersonIcon from '@/public/svgComponent/roomInfo/navbarSection/personIconSm';
import Image from 'next/image';
import React from 'react';

const NavRoomInfoComponent = () => {
  return (
    // 필요한 데이터
    // (룸타입, LAT ROOM ONLY이건뭐지, 기준 및 최대인원, 침대갯수 등)
    <>
      <div className="relative  h-[12.5rem]">
        <Image
          src="/sample/room5.png"
          layout="fill"
          objectFit="cover"
          alt="객실사진"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col mt-2 gap-1">
        <div className="">
          <p className="text-t2 font-bold leading-5">스탠다드 더블</p>
          <p className="text-p3 font-semibold">LAT ROOM ONLY</p>
        </div>
        <div className="">
          <p className="flex items-center gap-1 text-p3 text-text-sub leading-5">
            <SmPersonIcon />
            기준 2인 / 최대
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
