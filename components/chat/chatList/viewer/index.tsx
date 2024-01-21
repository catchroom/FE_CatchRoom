'use client';

import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ChatItem from '../../chatItem';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatListViewer = () => {
  const chatList = useRecoilValue(chatAllRoomAtom);
  console.log(chatList);
  return (
    <>
      {chatList &&
        chatList.map((item: ChatRoomType, index: number) => {
          return <ChatItem item={item} key={index} />;
        })}
    </>
  );
};

export default ChatListViewer;
