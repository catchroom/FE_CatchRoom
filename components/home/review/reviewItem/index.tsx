import Image from 'next/image';
import React from 'react';

const ReviewItem = () => {
  return (
    <div className="flex rounded-md">
      <div>
        <Image
          src="/sample/accommodation.png"
          width={110}
          height={140}
          alt="숙소이미지"
        />
      </div>
      <div className="flex flex-col py-5 pl-5 pr-6">
        <p>제주 신라 호텔</p>
        <p className="mt-2">
          저렴한 가격에 잘 이용했습니다! 다음번에 또 여기서 거래하고 싶습니당
        </p>
        <p className="mt-3">거래자닉네임 • 1주전</p>
      </div>
    </div>
  );
};

export default ReviewItem;
