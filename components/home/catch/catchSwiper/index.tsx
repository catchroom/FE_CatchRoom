import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITEMS_INFO } from '@/constants/catchItems';
import 'swiper/css';

import CatchItem from '../catchItem';

const CatchSwiper = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1.2} loop={true}>
      {ITEMS_INFO.roomItems.map((item) => {
        return (
          <SwiperSlide key={item.roomName}>
            <CatchItem
              key={item.roomName}
              roomName={item.roomName}
              resDate={item.resDate}
              oldPrice={item.oldPrice}
              discount={item.discount}
              location={item.location}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CatchSwiper;
