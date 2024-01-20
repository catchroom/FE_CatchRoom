'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import BottomSheets from '@/components/common/bottomSheets';
import Image from 'next/image';
import axios from 'axios';

const fetchRoomInfo = async (token: string, roomNumber: string) => {
  const data = await axios.get(
    `https://catchroom.xyz/v1/chat/room?roomId=${roomNumber}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data;
  return result.data;
};

const FindRoomInfo = ({ roomNumber }: { roomNumber: string }) => {
  const [cookies] = useCookies();
  console.log(cookies.accessToken, 'accessToken');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['roomInfo', roomNumber],
    queryFn: () => fetchRoomInfo(cookies.accessToken, roomNumber),
    retryOnMount: true,
  });

  const LoadingComponent = isLoading && <div>로딩중...</div>;
  const ErrorComponent = isError && <div>에러가 발생했습니다.</div>;
  console.log(data, 'data');

  return (
    <div>
      <BottomSheets title="채팅방 정보">
        {LoadingComponent}
        {ErrorComponent}
        {data && (
          <div className="w-full relative flex gap-3">
            <div className="w-20 h-20 relative rounded-xl overflow-hidden">
              <Image
                src={data.productImage}
                fill
                sizes="(max-width: 640px) 70vw, 100vw"
                alt="상품이미지"
              />
            </div>
            <div className="grow ">
              <p>✨{data.partnerNickName}님과의 채팅방✨</p>
              <div className="w-full flex flex-col">
                <p className="w-full text-h4 font-bold">{data.productName}</p>
                <div className="w-full flex justify-between gap-1">
                  <div className="flex">
                    <p>판매자 ID : {data.sellerId}</p>
                    <p>구매자 ID : {data.buyerId}</p>
                  </div>
                  <p className="text-t2">가격 : {data.price}원</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </BottomSheets>
    </div>
  );
};

export default FindRoomInfo;
