'use client';

import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import BottomSheets from '@/components/common/bottomSheets';

const fetchRoomInfo = async (token: string, roomNumber: string) => {
  const data = await axios.get(
    `https://catchroom.xyz/v1/chat/find?id=${roomNumber}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data;
  return result;
};

const FindRoomInfo = ({ roomNumber }: { roomNumber: string }) => {
  const [cookies] = useCookies();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['roomInfo'],
    queryFn: () => fetchRoomInfo(cookies.accessToken, roomNumber),
    retryOnMount: true,
  });

  const LoadingComponent = isLoading && <div>로딩중...</div>;
  const ErrorComponent = isError && <div>에러가 발생했습니다.</div>;

  console.log(data, 'data');
  console.log(error, 'error');

  return (
    <div>
      <BottomSheets title="채팅방 정보">
        {LoadingComponent}
        {ErrorComponent}
        <div>정보 보기</div>
      </BottomSheets>
    </div>
  );
};

export default FindRoomInfo;
