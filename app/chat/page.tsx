import React from 'react';
import ChatList from '../../components/chat/chatList/index';
import Header from '@/components/common/header';
import BottomNav from '@/components/common/bottomNav';

const page = () => {
  return (
    <div>
      <Header title="채팅" showBackButton />
      <ChatList />
      <BottomNav />
    </div>
  );
};

export default page;
