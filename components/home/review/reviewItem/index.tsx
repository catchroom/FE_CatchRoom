import Image from 'next/image';
import React from 'react';

const ReviewItem = () => {
  return (
    <div className="flex rounded-md bg-white w-[326px] h-[140px]">
      <div className="relative w-full h-full max-w-[110px] min-h-[140px]">
        <Image
          src="/sample/Rectangle-70.png"
          layout="fill"
          objectFit="cover"
          alt="숙소 이미지"
          style={{
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
          }}
        />
      </div>
      <div className="flex flex-col py-5 pl-5 pr-6">
        <p className="text-t2 font-bold">제주 신라 호텔</p>
        <p className="mt-2 text-t3 line-clamp-2">
          저렴한 가격에 잘 이용했습니다! 다음번에 또 여기서 거래하고 싶습니당
        </p>
        <p className="mt-3 text-t4 text-text-sub">거래자닉네임 • 1주전</p>
      </div>
    </div>
  );
};

export default ReviewItem;
