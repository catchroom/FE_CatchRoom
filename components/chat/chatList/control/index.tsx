'use client';

import React, { useEffect } from 'react';
import { useRoomConnection } from '@/hooks/useRoomConnection';
import ChatListViewer from '../viewer';
import ChatRoomSkeleton from '../../skeleton';

const ChatConrol = () => {
  const { connect, disconnect, deleteRoom, isLoading } = useRoomConnection();

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line
  }, []);

  // 로딩중일때는 스켈레톤 띄우기 5개
  const skeletons = Array.from({ length: 10 }, (_, i) => i);

  const loadingComponent = isLoading === true && (
    <div className="w-full h-full">
      {skeletons.map((_, i) => (
        <ChatRoomSkeleton key={i} />
      ))}
    </div>
  );
  const dataComponent = isLoading === false && (
    <ChatListViewer deleteRoom={deleteRoom} />
  );

  return (
    <div className="w-full h-full">
      {loadingComponent}
      {dataComponent}
    </div>
  );
};

export default ChatConrol;
