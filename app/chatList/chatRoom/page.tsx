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
    <div className="max-w-screen-sm h-screen flex flex-col items-center justify-center bg-semanticBg">
      <ProductInfo />
      <p className="text-xs text-grey m-2">2023년 1월 1일</p>
      <OfferMessage />
      <SendMessage />
      <ApproveMessage />
      <ReceiveMessage />
      <SelectedOfferMessage />
      <Send />
    </div>
  );
};

export default page;
