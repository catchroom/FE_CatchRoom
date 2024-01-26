'use client';

import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ChatItem from '../../chatItem';
import { ChatRoomType } from '@/types/chat/chatRoom/types';
import ModalControl from '../modalControl';

const ChatListViewer = ({
  deleteRoom,
}: {
  deleteRoom: (roomId: string) => void;
}) => {
  const chatList = useRecoilValue(chatAllRoomAtom);
  console.log(chatList);

  return (
    <>
      {chatList && chatList.length > 0 ? (
        chatList.map((item: ChatRoomType, index: number) => {
          return <ChatItem item={item} key={index} />;
        })
      ) : (
        <p>채팅방이 없습니다.</p>
      )}
      <ModalControl deleteRoom={deleteRoom} />
    </>
  );
};

export default ChatListViewer;
