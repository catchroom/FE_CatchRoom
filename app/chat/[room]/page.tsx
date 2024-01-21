import ChatRoomControl from '@/components/chat/chatRoom/control';
import ChatMessageViewer from '@/components/chat/chatRoom/viewer';
import ChatRoomWrapper from '@/components/chat/chatRoom/wrapper';
import React from 'react';

const page = ({ params }: { params: { room: string } }) => {
  const { room } = params;

  return (
    <ChatRoomWrapper>
      {room}
      <ChatRoomControl roomId={room}>
        <ChatMessageViewer />
      </ChatRoomControl>
    </ChatRoomWrapper>
  );
};

export default page;
