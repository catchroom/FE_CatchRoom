import React from 'react';
import ChatConrol from '../../components/chat/chatList/control/index';
import BottomNav from '@/components/common/bottomNav';
import ChatWrapper from '@/components/chat/chatList/wrapper';

const Page = async () => {
  return (
    <div className="w-full h-full">
      <ChatWrapper>
        <ChatConrol />
      </ChatWrapper>
      <BottomNav />
    </div>
  );
};

export default Page;
