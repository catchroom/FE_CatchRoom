'use client';

import React from 'react';
import ChatItem from '../chatItem';
import { useCookies } from 'react-cookie';
import { useGetChatRoom } from '@/api/chat/query';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatList = () => {
  const [cookies] = useCookies();
  const { data } = useGetChatRoom(cookies.accessToken);

  console.log(data);
  return (
    <div className="w-full h-full">
      {data &&
        data.map((item: ChatRoomType, index: number) => {
          return (
            <ChatItem
              key={index}
              buyerId={item.buyerId}
              chatRoomNumber={item.chatRoomNumber}
              sellerId={item.sellerId}
              productId={item.productId}
              loginUserIdentity={item.loginUserIdentity}
              accommodationUrl={item.accommodationUrl}
            />
          );
        })}
    </div>
  );
};

export default ChatList;
