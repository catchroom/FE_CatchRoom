import { TradeItem } from '@/types/mypage/types';
import Image from 'next/image';
import React from 'react';

const ReviewHeader = ({ DATA }: { DATA: TradeItem }) => {
  return (
    <div id="top" className="w-full flex gap-3 p-4 border-b border-border-sub">
      <Image
        src={DATA.url}
        alt="room3"
        width={300}
        height={300}
        priority
        className="w-12 h-12 rounded-sm object-cover"
      />
      <div>
        <p className=" text-t2">{DATA.name}</p>
        <p className=" text-t3 font-semibold">
          {DATA.sell_price?.toLocaleString('us-EN')}원
        </p>
      </div>
    </div>
  );
};

export default ReviewHeader;
