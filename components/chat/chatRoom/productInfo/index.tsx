'use client';
import React from 'react';
import DefaultBtn from '../../common/defaultBtn';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { CHAT_ITEMS } from '@/constants/chat';
import Image from 'next/image';

const ProductInfo = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const roomId = Number(searchParams?.get('roomId'));

  return (
    <div className="bg-white w-full h-[70px] flex gap-x-[12px] content-center items-center p-[16px] border border-border-sub mt-0 sticky top-0">
      <Image
        src="/productImage.png"
        className="rounded-[4px]"
        alt="숙소사진"
        width={45}
        height={45}
      />
      <div className="flex flex-col">
        <div className=" text-t2">{CHAT_ITEMS[roomId].ITEM_INFO.NAME}</div>
        <div className="font-semibold text-t3 font-semibold">
          {CHAT_ITEMS[roomId].ITEM_INFO.PRICE}원
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
