import React from 'react';
import ProductInfo from '@/components/chat/chatRoom/productInfo';
import OfferBtn from '@/components/chat/chatRoom/offerBtn/index';

const page = async () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <ProductInfo />
      <input
        className="mx-auto flex border-solid border border-black p-5 w-11/12 rounded-xl mt-8"
        placeholder="₩ 구매하고 싶은 금액"
      />
      <OfferBtn />
    </div>
  );
};

export default page;
