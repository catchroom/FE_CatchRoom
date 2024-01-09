'use client';

import React from 'react';
import ReviewButtons from '../reviewButtons';
import { decodeState, getDotDate } from '@/utils/get-dot-date';
import { TradeItem } from '@/types/mypage/types';
import Image from 'next/image';
import RightArrowSVG from '@/public/svgComponent/rightArrow';

const PurchasingItems = ({ item }: { item: TradeItem }) => {
  return (
    <div
      id="item"
      className="w-full flex flex-col p-3 border-2 border-border-secondary divide-y-2 divide-border-secondary"
    >
      {/* 작성일, 판매일, 판매 상태 */}
      <div id="top" className="flex justify-between py-1">
        <p>{getDotDate(item.start_date)} (구매날짜)</p>
        <div className="flex items-center gap-1">
          <p>{decodeState(item.state)}</p>
          <RightArrowSVG />
        </div>
      </div>

      {/* 호텔 이미지, 이름, 가격 정보 */}
      <div className="w-full flex py-1 gap-3">
        {/* 호텔 이미지 */}
        <Image
          src={item.url}
          alt="room3"
          width={500}
          height={500}
          priority
          className="w-24 h-24 rounded-sm object-cover"
        />
        {/* 호텔 이름과 가격 정보 */}
        <div className="w-full flex flex-col gap-3">
          <div id="bottom">
            <h1 className="text-t1 font-semibold">{item.name}</h1>
            <div className="flex items-center gap-3 font-medium">
              <p className="text-p1">{item.sell_price}원</p>
              {/* 캐치특가 여부 판단 */}
              {item.is_catch && (
                <p className="text-p4 bg-text-primary p-1 rounded-lg text-center text-white">
                  캐치특가
                </p>
              )}
            </div>
          </div>
          {/* 호텔 체크인 체크아웃 날짜 */}
          <p className="flex justify-end">
            {getDotDate(item.check_in)} ~ {getDotDate(item.check_out)}
          </p>
        </div>
      </div>

      {/* 리뷰 버튼 */}
      <ReviewButtons
        name={item.name}
        id={item.order_history_id}
        isReview={item.is_review}
      />
    </div>
  );
};

export default PurchasingItems;
