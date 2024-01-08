import React from 'react';
import ChatList from '../../components/chat/chatList/index';
import Header from '@/components/common/header';

const page = () => {
  return (
    <div>
      <Header title="채팅" />
      <ChatList />
    </div>
  );
};

export default page;
