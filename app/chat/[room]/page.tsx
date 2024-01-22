import ChatRoomControl from '@/components/chat/chatRoom/control';
import ChatMessageViewer from '@/components/chat/chatRoom/viewer';
import ChatRoomWrapper from '@/components/chat/chatRoom/wrapper';
import React from 'react';

const page = ({ params }: { params: { room: string | undefined } }) => {
  const { room } = params as { room: string };

  return (
    <ChatRoomWrapper>
      <ChatRoomControl roomId={room}>
        <ChatMessageViewer />
      </ChatRoomControl>
    </ChatRoomWrapper>
  );
};

export default page;
