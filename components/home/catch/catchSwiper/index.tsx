import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITEMS_INFO } from '@/constants/catchItems';
import 'swiper/css';

import CatchItem from '../catchItem';

const CatchSwiper = () => {
  return (
    <Swiper spaceBetween={12} slidesPerView={1.1} loop={true}>
      {ITEMS_INFO.roomItems.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CatchItem
              key={item.id}
              id={item.id}
              roomName={item.roomName}
              resDate={item.resDate}
              oldPrice={item.oldPrice}
              discount={item.discount}
              location={item.location}
              roomType="room"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CatchSwiper;
