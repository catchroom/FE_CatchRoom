'use client';

import Image from 'next/image';
import React from 'react';
import { useQueryGetRoomInfo } from '@/api/mypage/query';

const ReviewHeader = ({ id }: { id: number }) => {
  const { data } = useQueryGetRoomInfo(id);

  return (
    <div id="top" className="w-full flex gap-3 p-4 border-b border-border-sub">
      <Image
        src={data?.accommodationUrl[0].url}
        alt="data"
        width={300}
        height={300}
        priority
        className="w-12 h-12 rounded-sm object-cover"
      />
      <div>
        <p className="text-t2">{data?.accommodationName}</p>
        <p className="text-t3 font-semibold">
          {data?.sellPrice?.toLocaleString('us-EN')}원
        </p>
      </div>
    </div>
  );
};

export default ReviewHeader;
