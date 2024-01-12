import MapPinSmFillIcon from '@/public/svgComponent/mapPinSmFillIcon';
import Image from 'next/image';
import React from 'react';

const NavAccRegionComponent = () => {
  return (
    // 필요한 데이터
    // (숙소 주소)
    <div className="w-full h-[235px]">
      <div className="relative w-full h-[205px] ">
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
          <p className="text-t3 font-semibold">제주 제주시 동한두기길 23 2층</p>
        </div>
        <button className="underline text-p2 text-text-primary font-semibold">
          복사
        </button>
      </div>
    </div>
  );
};

export default NavAccRegionComponent;
