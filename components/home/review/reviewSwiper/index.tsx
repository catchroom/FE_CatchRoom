import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewItem from '../reviewItem';
import { useQueryGetReviewList } from '@/api/home/query';
import { ReviewItemType } from '@/types/home/types';
import ReviewSkeletonUI from '../ReviewSkeletonUI';

const ReviewSwiper = () => {
  const { data, isLoading } = useQueryGetReviewList(1);
  console.log(data);

  if (isLoading) return <ReviewSkeletonUI />;
  return (
    <Swiper spaceBetween={12} slidesPerView={1.2} loop={true}>
      {data?.list.map((item: ReviewItemType, index: number) => {
        return (
          <SwiperSlide key={item?.productName + index}>
            <ReviewItem
              key={item?.productName + index}
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
