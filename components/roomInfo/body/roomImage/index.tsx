'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'next/navigation';
import { useRoomItem } from '@/api/room-info/query';
import { AccommodationUrl } from '@/types/common/product/types';
import { UseParamsType } from '@/types/room-info/types';

const RoomImageComponent = () => {
  // 받아와야 할 데이터
  const { id } = useParams() as UseParamsType;
  const { data, isLoading } = useRoomItem(id);

  // (숙소 관련 이미지들)
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleSwiper = (swiper: SwiperClass) => {
    swiper.on('slideChange', () => {
      setImgIndex(swiper.realIndex);
    });
  };

  return (
    <div className="relative bg-blue-gray-50 mt-[3.75rem]">
      <Swiper
        onSwiper={handleSwiper}
        navigation
        pagination={{ clickable: true }}
        initialSlide={imgIndex}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {isLoading && (
          <div className="relative w-full h-[16.25rem] animate-pulse">
            <div className="w-full h-full bg-gray-400" />
          </div>
        )}
        {data &&
          data.accommodationUrl.map((data: AccommodationUrl) => (
            <SwiperSlide key={data.id}>
              <div className="relative w-full h-[16.25rem]">
                {!isLoading && (
                  <Image
                    key={data.id}
                    src={data.url}
                    fill
                    sizes="(max-width: 640px) 100vw, 100vw"
                    priority
                    alt={data.url}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {!isLoading && (
        <div className="absolute bottom-0 right-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center px-3 py-1 mr-5 mb-6 z-10">
          <p className="text-white opacity-100 text-t3 font-medium">
            {imgIndex + 1}/{data && data.accommodationUrl.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomImageComponent;
