'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CatchItem from '../catchItem';
import { useQueryGetCatchItemsList } from '@/api/home/query';
import { catchItems } from '@/types/common/catchItems/types';
import CatchSkeletonUI from '../catchSkeletonUI';

const CatchSwiper = () => {
  const { data, isLoading } = useQueryGetCatchItemsList(1);

  const [slidesPerView, setSlidesPerView] = useState(1.1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 410) {
        setSlidesPerView(1.2);
      } else {
        setSlidesPerView(1.1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (isLoading) return <CatchSkeletonUI />;
  return (
    <Swiper spaceBetween={12} slidesPerView={slidesPerView} loop={true}>
      {data?.list.map((item: catchItems) => {
        return (
          <SwiperSlide key={item?.productId}>
            <CatchItem
              key={item.productId}
              productId={item.productId}
              accommodationName={item.accommodationName}
              checkIn={item.checkIn}
              checkOut={item.checkOut}
              originalPrice={item.originalPrice}
              discountRate={item.discountRate}
              sellPrice={item.sellPrice}
              region={item.region}
              image={item.image}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CatchSwiper;
