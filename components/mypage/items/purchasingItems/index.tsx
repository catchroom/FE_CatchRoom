'use client';

import React from 'react';
import ReviewButtons from '../reviewButtons';
import { ReviewType, getDotDate } from '@/utils/get-dot-date';
import Image from 'next/image';
import CalendarSVG from '@/public/svgComponent/mediumCalendar';
import { MypagePurchaseType } from '@/types/mypage/data-types';
import { useRouter } from 'next/navigation';

const PurchasingItems = ({ item }: { item: MypagePurchaseType }) => {
  const router = useRouter();
  const listState = '구매';
  const handleClick = () => {
    router.push(`/order/complete/detail`);
  };

  let isReview: ReviewType = 'noReview';
  if (item.reviewStatusType === '리뷰 삭제 완료') {
    isReview = 'deleteReview';
  } else if (item.reviewStatusType === '리뷰 작성 완료') {
    isReview = 'onReview';
  } else if (item.reviewStatusType === '리뷰 작성 가능') {
    isReview = 'noReview';
  } else if (item.reviewStatusType === '리뷰 작성기한 만료') {
    isReview = 'outDatedReview';
  }

  return (
    <div id="container" className="w-full px-5 py-3 flex flex-col gap-3">
      <div className="w-full flex flex-col">
        {/* 호텔 이미지, 이름, 가격 정보 */}
        <div className="w-full flex gap-4">
          <div className="relative w-[120px] h-[120px]">
            {/* 호텔 이미지 */}
            <Image
              src={item.thumbNailUrl}
              alt="room3"
              fill={true}
              sizes="(max-width: 480px) 500px, (max-width: 320px) 500px, 180px"
              priority
              className="rounded-md object-cover"
            />
            {/* 캐치특가 여부 판단 */}
            {item.isCatch && (
              <span className="text-text-on border border-pink-600 bg-focus flex text-p4 absolute top-1 left-1 z-10 items-center py-1 px-[6.5px] rounded-xl">
                캐치특가
              </span>
            )}
          </div>
          {/* 호텔 이름과 가격 정보 */}
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              {/* 호텔 체크인 체크아웃 날짜 */}
              <div className="w-full flex justify-between grow">
                <p className="flex items-center gap-1 text-text text-t3 font-medium">
                  <CalendarSVG />
                  {getDotDate(item.checkIn)} - {getDotDate(item.checkOut)}
                </p>
                <span
                  onClick={handleClick}
                  className="text-t3 text-text-sub underline cursor-pointer"
                >
                  상세
                </span>
              </div>
              <div className="text-text">
                <h3 className="text-t1 font-bold">{item.accommodationName}</h3>
                <p className="text-t2 font-semibold">
                  {item.buyPrice?.toLocaleString('us-EN')}원
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-sub text-t3 font-medium">
              <p>구매일 : {getDotDate(item.buyDate)}</p>
            </div>
          </div>
        </div>
      </div>
      {item?.reviewStatusType && (
        <ReviewButtons
          id={parseInt(item.productId)}
          type={listState}
          isReview={isReview}
          reviewId={item?.reviewId}
        />
      )}
    </div>
  );
};

export default PurchasingItems;
