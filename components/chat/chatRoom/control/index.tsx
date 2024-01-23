'use client';

import React, { ReactNode, useEffect } from 'react';
import { useChatConnection } from '@/hooks/useChatConnection';
import ChatMessageSender from '../sender';
import ProductInfo from '../productInfo';

const ChatRoomControl = ({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) => {
  const { connect, disconnect, sendMessage } = useChatConnection(roomId);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <div>
        <ProductInfo />
      </div>
      {children}
      <ChatMessageSender publish={sendMessage} />
    </div>
  );
};

export default ChatRoomControl;
