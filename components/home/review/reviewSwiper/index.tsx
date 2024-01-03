import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewItem from '../reviewItem';

const ReviewSwiper = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1.2} loop={true}>
      <SwiperSlide>
        <ReviewItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSwiper;
