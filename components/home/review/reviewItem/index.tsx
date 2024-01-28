import { ReviewItemType } from '@/types/home/types';
import Image from 'next/image';
import React from 'react';

const ReviewItem = ({
  productName,
  content,
  date,
  image,
  userName,
}: ReviewItemType) => {
  return (
    <div className="flex rounded-md bg-white w-full h-[140px]">
      <div className="relative lg:w-[110px] lg:h-[140px] flex-shrink-0 md:w-[88px] md:h-[124px] sm:w-[88px] sm:h-[124px]">
        <Image
          src={image}
          fill
          priority
          alt="숙소 이미지"
          sizes="(max-width: 480px) 70vw, (max-width: 320px) 100vw"
          style={{
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
          }}
        />
      </div>
      <div className="flex flex-col py-5 pl-5 pr-6">
        <p className="lg:text-t2 font-bold  md:text-p2 sm:text-p2">
          {productName}
        </p>
        <p className="mt-2 lg:text-t3 line-clamp-2 max-w-[140px] md:text-p4 sm:text-p4">
          {content}
        </p>
        <p className="mt-3 lg:text-t4 text-text-sub md:text-p4 sm:text-p4">
          {userName} • {date}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
