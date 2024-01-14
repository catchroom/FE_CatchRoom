'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGE_SRC } from '@/constants/roomImage';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RoomImageComponent = () => {
  // 받아와야 할 데이터
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
        loop={true}
        onSwiper={handleSwiper}
        navigation
        pagination={{ clickable: true }}
        initialSlide={imgIndex}
      >
        {IMAGE_SRC.data.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[16.25rem]">
              <Image
                key={index}
                src={data.src}
                layout="fill"
                objectFit="cover"
                alt={data.src}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 right-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center px-3 py-1 mr-5 mb-6 z-10">
        <p className="text-white opacity-100 text-t3 font-medium">
          {imgIndex + 1}/{IMAGE_SRC.data.length}
        </p>
      </div>
    </div>
  );
};

export default RoomImageComponent;
