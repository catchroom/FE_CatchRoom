'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';

const ChatMessageViewer = () => {
  const messages = useRecoilValue(chatContentAtom);
  return (
    <div className="pt-3 px-5">
      {messages.map((item, index) => (
        <MessageItem
          key={index}
          type={item.type}
          message={item.message}
          userId={item.userId}
          roomId={item.roomId}
          time={item.time}
          negoPrice={item.negoPrice}
        />
      ))}
    </div>
  );
};

export default ChatMessageViewer;
