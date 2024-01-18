import Image from 'next/image';
import React from 'react';

const ReviewItem = () => {
  return (
    <div className="flex p-5 relative border-b border-divider-sub gap-5 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-t1 font-bold">제주신라호텔</h1>
        <p className="text-t3">
          저렴한 가격에 잘 이용했습니다! 다음번도 또 여기서 거래하고 저렴한
          가격에 잘 이용 했습니다! 다음번도 또 여기서 거래하고 싶어요.
        </p>
        <p className="text-t4 text-text-sub">거래자닉네임 • 1주전 </p>
      </div>
      <div className="flex items-center w-[100px]">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/sample/accommodation.png"
            objectFit="cover"
            layout="fill"
            alt="숙소이미지"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
