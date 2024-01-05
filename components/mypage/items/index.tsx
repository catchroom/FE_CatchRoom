import React from 'react';
import Image from 'next/image';
import { TradeItem } from '@/types/mypage/types';
import { getDotDate } from '@/utils/get-dot-date';

const MItem = ({ item }: { item: TradeItem }) => {
  const decodeState = (state: string) => {
    switch (state) {
      case 'onSale':
        return '게시 만료예정';
      case 'soldOut':
        return '판매완료';
      case 'canceled':
        return '기한만료';
      default:
        return '판매불가';
    }
  };

  return (
    <div
      id="item"
      className="w-full flex flex-col p-3 border-2 border-border-secondary divide-y-2 divide-border-secondary"
    >
      <div id="top" className="flex justify-between py-1">
        <p>작성일 {getDotDate(item.start_date)}</p>
        <div className="flex gap-1">
          <p>{getDotDate(item.end_date)}</p>
          <p>{decodeState(item.state)}</p>
        </div>
      </div>
      <div className="w-full flex py-1 gap-3">
        <Image
          src={item.url}
          alt="room3"
          width={500}
          height={500}
          priority
          className="w-24 h-24 rounded-sm object-cover"
        />
        <div className="w-full flex flex-col gap-3">
          <div id="bottom">
            <h1 className="text-t1 font-semibold">{item.name}</h1>
            <div className="flex items-center gap-3 font-medium">
              <p className="text-p1">{item.sell_price}원</p>
              {item.is_catch && (
                <p className="text-p4 bg-text-primary p-1 rounded-lg text-center text-white">
                  캐치특가
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <p>
              {getDotDate(item.check_in)} ~ {getDotDate(item.check_out)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MItem;
