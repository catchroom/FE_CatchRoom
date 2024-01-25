'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import MessageItem from '@/components/chat/chatRoom/messageItem';
import InfiniteScrollWrapper from '../infiniteWrapper';

const ChatMessageViewer = ({
  accept,
  deny,
  roomId,
}: {
  accept: (price: number) => void;
  deny: (price: number) => void;
  roomId: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setPreviousMessages] = useRecoilState(chatContentAtom);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="w-full p-5 min-h-[calc(100vh-200px)]">
      <InfiniteScrollWrapper accept={accept} deny={deny} roomId={roomId} />
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
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessageViewer;
