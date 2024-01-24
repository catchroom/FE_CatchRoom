'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';

const ChatMessageViewer = ({
  accept,
  deny,
}: {
  accept: (price: number) => void;
  deny: (price: number) => void;
}) => {
  const messages = useRecoilValue(chatContentAtom);
  return (
    <div className="w-full p-5 min-h-[calc(100vh-200px)]">
      {messages.map((item, index) => (
        <MessageItem
          accept={accept}
          deny={deny}
          key={index}
          type={item.type}
          message={item.message as string}
          userId={item.userId as number}
          roomId={item.roomId as string}
          time={item.time as string}
          negoPrice={item.negoPrice as number}
        />
      ))}
    </div>
  );
};

export default ChatMessageViewer;
