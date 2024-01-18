'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { ChatRoom } from './page';
import FindRoomInfo from './FindRoomInfo';

const fetchChatRoom = async (token: string) => {
  const data = await axios('https://catchroom.xyz/v1/chat/room/list', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await data.data;
  return result.data;
};

const ChattingRoom = () => {
  const [cookies] = useCookies();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['chatRoom'],
    queryFn: () => fetchChatRoom(cookies.accessToken),
  });

  const LoadingComponent = isLoading && <div>로딩중...</div>;
  const ErrorComponent = isError && <div>에러가 발생했습니다.</div>;

  return (
    <div className="w-full flex flex-col gap-5">
      {LoadingComponent}
      {ErrorComponent}
      {data &&
        data.map((chatRoom: ChatRoom) => {
          return (
            <div
              key={chatRoom.chatRoomNumber}
              className="flex flex-col gap-1 p-5 rounded-lg border-pink-400 border overflow-hidden"
            >
              <div>
                <strong>채팅방 정보</strong>
                <p> : {chatRoom.chatRoomNumber}</p>
              </div>
              <div className="bg-bg p-3 shadow-lg rounded-lg">
                <strong>채팅방 정보</strong>
                <p>구매자 아이디 : {chatRoom.buyerId}</p>
                <p>판매자 아이디 : {chatRoom.sellerId}</p>
                <p>상품 아이디 : {chatRoom.productId}</p>
                <p>나는 누구인가 : {chatRoom.loginUserIdentity}</p>
              </div>
              <FindRoomInfo roomNumber={chatRoom.chatRoomNumber} />
            </div>
          );
        })}
    </div>
  );
};

export default ChattingRoom;
