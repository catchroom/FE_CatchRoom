'use client';

import React, { useEffect, ReactNode } from 'react';
import { useRoomConnection } from '@/hooks/useRoomConnection';

const ChatConrol = ({ children }: { children: ReactNode }) => {
  const { connect, disconnect } = useRoomConnection();

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return <div className="w-full h-full">{children}</div>;
};

export default ChatConrol;
