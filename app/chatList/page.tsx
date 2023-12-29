import React from 'react';
import ChatItem from '@/components/chatList/chatItem/.';

const page = async () => {
  return (
    <div className="max-w-screen-sm h-screen flex flex-col items-center justify-center bg-semanticBg">
      <ChatItem />
    </div>
  );
};

export default page;
