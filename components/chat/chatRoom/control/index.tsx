'use client';

import React, { useEffect, ReactNode } from 'react';
import { useChatConnection } from '@/hooks/useChatConnection';
import ChatMessageSender from '../sender';

const ChatRoomControl = ({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) => {
  const { connect, disconnect } = useChatConnection(roomId);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full h-full">
      {children}
      <ChatMessageSender />
    </div>
  );
};

export default ChatRoomControl;
