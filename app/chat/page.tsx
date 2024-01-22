import React from 'react';
import ChatList from '../../components/chat/chatList/control/index';
import BottomNav from '@/components/common/bottomNav';
import ChatWrapper from '@/components/chat/chatList/wrapper';

const Page = () => {
  return (
    <div className="w-full h-full">
      <ChatWrapper>
        <ChatList />
      </ChatWrapper>
      <BottomNav />
    </div>
  );
};

export default Page;
