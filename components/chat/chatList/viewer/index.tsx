'use client';

import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ChatItem from '../../chatItem';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatListViewer = () => {
  const chatList = useRecoilValue(chatAllRoomAtom);

  // 채팅방 리스트
  const chatListComponent =
    chatList && chatList.length > 0 ? (
      chatList.map((item: ChatRoomType, index: number) => {
        return <ChatItem item={item} key={index} />;
      })
    ) : (
      <p>채팅방이 없습니다.</p>
    );

  return <>{chatList && chatList.length > 0 && chatListComponent}</>;
};

export default ChatListViewer;
