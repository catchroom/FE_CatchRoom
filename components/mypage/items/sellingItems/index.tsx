import React from 'react';
import Image from 'next/image';
import { MypageSellingType } from '@/types/mypage/data-types';
import CalendarSVG from '@/public/svgComponent/mediumCalendar';
import ReviewButtons from '../reviewButtons';
import DeleteButtons from '../deleteButtons';
import { ReviewType, getDotDate } from '@/utils/get-dot-date';

const MItem = ({ item }: { item: MypageSellingType }) => {
  const reEnroll =
    item.dealState === 'DONEDEAL' ? (
      <span className=" text-text-primary underline">기한 수정</span>
    ) : null;

  const isCatch =
    item?.dealState !== 'DONEDEAL' && item.isCatch === true ? true : false;

  // 게시만료일때만 => 판매완료, 기한만료, 판매불가 따지기
  const isNotIng = item?.dealState
    ? item.dealState === 'UNSOLD' || 'EXPIRED' || 'DONEDEAL'
      ? true
      : false
    : false;

  let sellState = '판매 완료';
  if (item?.dealState === 'EXPIRED') {
    sellState = '체크인 만료';
  } else if (item?.dealState === 'UNSOLD') {
    sellState = '기한 만료';
  }

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
    <div className="w-full px-5 py-3 flex flex-col gap-3">
      <div id="container" className="w-full flex flex-col">
        {/* 호텔 이미지, 이름, 가격 정보 */}
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px]">
            {/* 호텔 이미지 */}
            {isNotIng && (
              <div className="absolute flex z-10 items-center justify-center inset-0 backdrop-saturate-50 backdrop-brightness-75">
                <p className="text-text-on font-semibold text-t2">
                  {sellState}
                </p>
              </div>
            )}
            <Image
              src={item.thumbNailUrl}
              alt="room3"
              fill={true}
              sizes="(max-width: 480px) 100px, (max-width: 320px) 80px, 60px"
              priority
              className="rounded-md object-cover"
            />
            {/* 캐치특가 여부 판단 */}
            {isCatch && (
              <span className="text-text-on border border-pink-600 bg-focus flex text-p4 absolute top-1 left-1 z-10 items-center py-1 px-[6.5px] rounded-xl">
                캐치특가
              </span>
            )}
          </div>
          {/* 호텔 이름과 가격 정보 */}
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              {/* 호텔 체크인 체크아웃 날짜 */}
              <div className="flex items-center justify-between w-full">
                <p className="flex items-center gap-1 text-text text-t3 font-medium">
                  <CalendarSVG />
                  {getDotDate(item.checkIn)} - {getDotDate(item.checkOut)}
                </p>
                {isNotIng && <DeleteButtons id={parseInt(item.productId)} />}
              </div>
              <div className="text-text">
                <h3 className="text-t1 font-bold">{item.accommodationName}</h3>
                <p className="text-t2 font-semibold">
                  {item.sellPrice.toLocaleString('us-EN')}원
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-sub text-t3 font-medium">
              <p>
                {item?.dealState
                  ? '게시기한 만료'
                  : `게시 만료일 : ${getDotDate(item.endDate, false)}`}
              </p>
              {reEnroll}
            </div>
          </div>
        </div>
      </div>
      {item?.reviewStatusType && (
        <ReviewButtons id={item.id} isReview={isReview} />
      )}
    </div>
  );
};

export default MItem;
