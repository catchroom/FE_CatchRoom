import ChatRoomWrapper from '@/components/chat/chatRoom/wrapper';
import React from 'react';

const page = ({ params }: { params: { room: string } }) => {
  const { room } = params;

  return (
    <ChatRoomWrapper>
      {room}
      <div>안녕</div>
    </ChatRoomWrapper>
  );
};

export default page;
