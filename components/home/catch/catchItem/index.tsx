'use client';
import Image from 'next/image';
import React from 'react';

const CatchItem = () => {
  return (
    <div className="flex flex-col relative w-[320px] mt-5 rounded-lg border border-gray-200">
      <div className="absolute flex top-[14px] left-4 bg-black gap-1 p-[10px] rounded-3xl">
        <Image
          src="/marker-pin-01-filled.svg"
          width={16}
          height={16}
          alt="지도 아이콘"
        />
        <span className="text-white">제주</span>
      </div>
      <div className="absolute flex top-[14px] right-4">
        <div className="relative">
          <Image
            src="/Ellipse-22.svg"
            width={32}
            height={32}
            alt="찜하기 버튼"
          />
          <div className="absolute top-[7px] right-[6px]">
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
            <p className="text-p2 ml-1">12.25 (월) ~ 12.26 (화)</p>
          </div>
          <p className="line-through text-p2 text-text-sub">구매가 200,000</p>
        </div>
        <div className="flex justify-between font-bold">
          <div className="text-h5">제주신라호텔</div>
          <div className="text-t1">
            <span className="text-main text-p1">50%</span> 100,000원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchItem;
