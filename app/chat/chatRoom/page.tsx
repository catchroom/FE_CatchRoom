import React from 'react';
import ProductInfo from '@/components/chat/chatRoom/productInfo';
import Send from '@/components/chat/chatRoom/send';
import OfferMessage from '@/components/chat/chatRoom/offerMessage';
import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
import SendMessage from '@/components/chat/chatRoom/Message';
import ReceiveMessage from '@/components/chat/chatRoom/receiveMessage';
import SelectedOfferMessage from '@/components/chat/chatRoom/selectedOfferMessage';
import Date from '@/components/chat/chatRoom/date';
import Header from '@/components/common/header';
import MessageList from '@/components/chat/chatRoom/messageList';

const page = async () => {
  return (
    <>
      <Header title="닉네임" showBackButton />
      <div className="flex flex-col ">
        <ProductInfo />
        <div className="bg-gray-100 overflow-auto flex flex-col px-5 h-screen">
          <Date />
          <MessageList />
          {/* <OfferMessage /> */}
          {/* <SendMessage /> */}
          {/* <ApproveMessage /> */}
          {/* <ReceiveMessage /> */}
          {/* <SelectedOfferMessage /> */}
        </div>
        <Send />
      </div>
    </>
  );
};

export default page;
