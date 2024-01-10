import React from 'react';
import ProductInfo from '@/components/chat/chatRoom/productInfo';
import Send from '@/components/chat/chatRoom/send';
import Date from '@/components/chat/chatRoom/date';
import Header from '@/components/common/header';
import MessageList from '@/components/chat/chatRoom/messageList';

const page = async () => {
  return (
    <>
      <Header title="닉네임" showBackButton />
      <div className="flex flex-col ">
        <ProductInfo />
        <div className="bg-gray-100 overflow-auto flex flex-col px-5 h-full">
          <Date />
          <MessageList />
        </div>
        <Send />
      </div>
    </>
  );
};

export default page;
