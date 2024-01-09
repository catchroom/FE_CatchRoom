'use client';
import React from 'react';
import DefaultBtn from '../../common/defaultBtn';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { CHAT_ITEMS } from '@/constants/chat';

const ProductInfo = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const chatId = Number(searchParams?.get('chatId'));

  // console.log(chatId);

  return (
    <div className="bg-white w-full h-18 flex content-center items-center px-5 py-3 border-solid border border-borderSub mt-0 sticky top-0">
      <img src="/productImage.png" className="pr-3"></img>
      <div className="flex flex-col w-full">
        <div className="pr-2 pb-2 text-sm">
          {CHAT_ITEMS[chatId].ITEM_INFO.NAME}
        </div>
        <div className="font-semibold text-xs">
          {CHAT_ITEMS[chatId].ITEM_INFO.PRICE}원
        </div>
      </div>
      {/* 가격 제안 페이지에서는 제안버튼 미노출 */}
      {pathName !== '/chat/chatRoom/offerPrice' && (
        <DefaultBtn
          label="가격 제안하기"
          theme="basic"
          onClick={() => {
            router.push(`chatRoom/offerPrice`);
          }}
        />
      )}
    </div>
  );
};

export default ProductInfo;
