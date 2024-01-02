import React from 'react';
import ProductInfo from '@/components/chatRoom/productInfo';
import Send from '@/components/chatRoom/send';
import OfferMessage from '@/components/chatRoom/offerMessage';
import ApproveMessage from '@/components/chatRoom/approveMessage';
import SendMessage from '@/components/chatRoom/sendMessage';
import ReceiveMessage from '@/components/chatRoom/receiveMessage';
import SelectedOfferMessage from '@/components/chatRoom/selectedOfferMessage';

const page = async () => {
  return (
    <div className="">
      <ProductInfo />
      <div className="bg-blue-gray-50 overflow-auto flex flex-col">
        <p className="text-xs text-blue-gray-600 m-2 text-center">
          2023년 1월 1일
        </p>
        <OfferMessage />
        <SendMessage />
        <ApproveMessage />
        <ReceiveMessage />
        <SelectedOfferMessage />
      </div>
      <Send />
    </div>
  );
};

export default page;
