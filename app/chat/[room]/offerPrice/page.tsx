import React from 'react';
import ProductInfo from '@/components/chat/chatRoom/productInfo';
import OfferBtn from '@/components/chat/chatRoom/offerBtn/index';
import Header from '@/components/common/header';

const page = () => {
  return (
    <>
      <Header title="가격 제안" showBackButton />
      <div className="h-screen w-full flex flex-col overflow-hidden">
        <ProductInfo />
        <input
          className="h-[52px] mx-auto flex border border-border-sub p-5 w-11/12 rounded-[4px] mt-[20px]"
          placeholder="₩ 판매가의 10%까지 입력 가능"
        />
        <p className="px-5 py-2 text-p2 text-text-sub leading-[20px]">
          건전한 네고를 위해 무리한 제안은 지양해 주세요. <br />
          최종결제금액은 구매수수료 5%가 추가 합산됩니다.
        </p>
        <OfferBtn />
      </div>
    </>
  );
};

export default page;
