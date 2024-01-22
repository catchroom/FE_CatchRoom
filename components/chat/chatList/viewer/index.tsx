'use client';

import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ChatItem from '../../chatItem';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatListViewer = ({ initialData }: { initialData: ChatRoomType[] }) => {
  const chatList = useRecoilValue(chatAllRoomAtom);

  // 초기 데이터 로드 (채팅방 리스트)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialComponent =
    initialData && initialData.length > 0 ? (
      initialData.map((item: ChatRoomType, index: number) => {
        return <ChatItem item={item} key={index} />;
      })
    ) : (
      <p>채팅방이 없습니다.</p>
    );

  // 채팅방 리스트
  const chatListComponent =
    chatList &&
    chatList.length > 0 &&
    chatList.map((item: ChatRoomType, index: number) => {
      return <ChatItem item={item} key={index} />;
    });

  return (
    <>
      {chatList && chatList.length > 0 ? chatListComponent : initialComponent}
    </>
  );
};

export default ChatListViewer;
