import { TradeItem } from '@/types/mypage/types';
import Image from 'next/image';
import React from 'react';

const ReviewHeader = ({ DATA }: { DATA: TradeItem }) => {
  return (
    <div id="top" className="w-full flex gap-3 py-3 border-b-2">
      <Image
        src={DATA.url}
        alt="room3"
        width={300}
        height={300}
        priority
        className="w-12 h-12 rounded-sm object-cover"
      />
      <div>
        <p>{DATA.name}</p>
        <p>{DATA.sell_price.toLocaleString('us-EN')}원</p>
      </div>
    </div>
  );
};

export default ReviewHeader;
