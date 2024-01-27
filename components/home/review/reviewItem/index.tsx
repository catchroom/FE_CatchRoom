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
      <div className="relative w-[110px] h-[140px] flex-shrink-0">
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
        <p className="text-t2 font-bold">{productName}</p>
        <p className="mt-2 text-t3 line-clamp-2 max-w-[140px]">{content}</p>
        <p className="mt-3 text-t4 text-text-sub">
          {userName} • {date}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
