'use client';
import React from 'react';
import ReviewItem from '../reviewItem';
import { useQueryGetReviewListForScroll } from '@/api/home/query';
import { ReviewItemType } from '@/types/home/types';

const ReviewContainer = () => {
  const { data } = useQueryGetReviewListForScroll(2);

  return (
    <div className="mt-[52px] w-full">
      {data?.list.map((item: ReviewItemType) => {
        return (
          <ReviewItem
            key={item?.productName}
            productName={item?.productName}
            userName={item?.userName}
            date={item?.date}
            content={item?.content}
            image={item?.image}
          />
        );
      })}
    </div>
  );
};

export default ReviewContainer;
