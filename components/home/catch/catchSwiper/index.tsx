import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CatchItem from '../catchItem';

const CatchSwiper = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1.2} loop={true}>
      <SwiperSlide>
        <CatchItem />
      </SwiperSlide>
      <SwiperSlide>
        <CatchItem />
      </SwiperSlide>
      <SwiperSlide>
        <CatchItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default CatchSwiper;
