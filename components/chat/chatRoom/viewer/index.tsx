'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';

const ChatMessageViewer = () => {
  const messages = useRecoilValue(chatContentAtom);
  return (
    <div className="py-3 px-5 bg-mint min-h-[calc(100vh-53px)]">
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
