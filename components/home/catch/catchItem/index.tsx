'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { catchItems } from '@/types/common/catchItems/types';
import White from '@/public/svgComponent/marker/white';
import HeartButton from '@/components/common/heartButton';
import { useRouter } from 'next/navigation';
import CalendarIcon from '@/public/svgComponent/calendar';
import { formatDateWithDay } from '@/utils/get-dot-date';

const CatchItem = ({
  productId,
  accommodationName,
  checkIn,
  checkOut,
  originalPrice,
  discountRate,
  sellPrice,
  region,
  image,
}: catchItems) => {
  const router = useRouter();

  const [isHeart, setIsHeart] = useState(false);
  const handleHeartBtnClick = () => {
    setIsHeart((prev) => !prev);
  };

  const handleItemClick = () => {
    router.push(`/room-info?id=${productId}`);
  };

  const checkInString = formatDateWithDay(checkIn!);
  const checkOutString = formatDateWithDay(checkOut!);

  return (
    <div className="flex flex-col relative w-full mt-5 rounded-lg border border-gray-200">
      <div className="absolute flex top-[12px] left-4 bg-black gap-1 p-[10px] rounded-3xl items-center z-10">
        <White />
        <span className="text-white">{region}</span>
      </div>
      <div className="absolute flex top-[12px] h-[40px] right-4 justify-center items-center z-10">
        <div className="relative ">
          <Image
            src="/Ellipse-22.svg"
            width={40}
            height={40}
            alt="찜하기 버튼"
          />
          <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 cursor-pointer">
            <HeartButton
              isButtonActive={isHeart}
              stateHandler={handleHeartBtnClick}
              whiteStroke={true}
            />
          </div>
        </div>
      </div>
      <div className="h-[184px] relative">
        <Image
          src={image!}
          alt="숙소이미지"
          fill={true}
          sizes="(max-width: 480px) 364px, (max-width: 390px) 240px, 240px"
          className="rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-1 p-5 bg-surface">
        <div className="flex justify-between">
          <div className="flex">
            <CalendarIcon />
            <p className="text-p2 ml-1 text-black font-semibold">
              {checkInString} - {checkOutString}
            </p>
          </div>
          <p className="line-through text-p2 text-text-sub">
            구매가 {originalPrice?.toLocaleString()}
          </p>
        </div>
        <div
          className="flex justify-between font-bold"
          onClick={handleItemClick}
        >
          <div className="text-h5">
            {accommodationName.length > 7
              ? `${accommodationName.substring(0, 7)}...`
              : accommodationName}
          </div>
          <div className="text-t1">
            <span className="text-main text-p1 mr-1">{discountRate}%</span>
            {sellPrice?.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchItem;
