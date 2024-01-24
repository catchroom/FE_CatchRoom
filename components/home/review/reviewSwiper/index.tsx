import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewItem from '../reviewItem';
import { useQueryGetReviewList } from '@/api/home/query';
import { ReviewItemType } from '@/types/home/types';

const ReviewSwiper = () => {
  const { data } = useQueryGetReviewList(1);
  console.log(data);
  return (
    <Swiper spaceBetween={12} slidesPerView={1.2} loop={true}>
      {data?.list.map((item: ReviewItemType) => {
        return (
          <SwiperSlide key={item?.productName}>
            <ReviewItem
              key={item?.productName}
              productName={item?.productName}
              content={item?.content}
              date={item?.date}
              image={item?.image}
              userName={item?.userName}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSwiper;
