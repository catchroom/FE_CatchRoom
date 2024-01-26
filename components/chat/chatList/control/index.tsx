'use client';

import React, { useEffect } from 'react';
import { useRoomConnection } from '@/hooks/useRoomConnection';
import ChatListViewer from '../viewer';

const ChatConrol = () => {
  const { connect, disconnect, deleteRoom } = useRoomConnection();

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full h-full">
      <ChatListViewer deleteRoom={deleteRoom} />
    </div>
  );
};

export default ChatConrol;
