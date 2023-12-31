'use client';
import Image from 'next/image';
import React from 'react';
import { catchItems } from '@/types/common/catchItems/types';
import White from '@/public/svgComponent/marker/white';

const CatchItem = ({
  roomName,
  resDate,
  oldPrice,
  discount,
  location,
}: catchItems) => {
  const newPrice = Math.round(oldPrice - oldPrice * (discount / 100));
  return (
    <div className="flex flex-col relative w-[320px] mt-5 rounded-lg border border-gray-200">
      <div className="absolute flex top-[14px] left-4 bg-black gap-1 p-[10px] rounded-3xl items-center">
        <White />
        <span className="text-white">{location}</span>
      </div>
      <div className="absolute flex top-[14px] right-4">
        <div className="relative">
          <Image
            src="/Ellipse-22.svg"
            width={32}
            height={32}
            alt="찜하기 버튼"
          />
          <div className="absolute top-[7px] right-[6px] cursor-pointer">
            <Image
              src="/heart-action.svg"
              width={20}
              height={20}
              alt="찜하기 버튼"
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/sample/accommodation.png"
          alt="숙소이미지"
          width={320}
          height={184}
          className="rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <div className="flex justify-between">
          <div className="flex">
            <Image
              src="/calendar.svg"
              width={20}
              height={20}
              alt="달력아이콘"
            />
            <p className="text-p2 ml-1 text-black font-semibold">{resDate}</p>
          </div>
          <p className="line-through text-p2 text-text-sub">
            구매가 {oldPrice}
          </p>
        </div>
        <div className="flex justify-between font-bold">
          <div className="text-h5">{roomName}</div>
          <div className="text-t1">
            <span className="text-main text-p1">{discount}%</span> {newPrice}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchItem;
