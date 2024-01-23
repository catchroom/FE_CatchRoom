'use client';
import React from 'react';
import DefaultBtn from '../../common/defaultBtn';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { chatRoomAtom } from '@/atoms/chat/chatContentAtom';
import LOGOImage from '@/public/Yanolja_CI.png';

const ProductInfo = () => {
  const chatInfo = useRecoilValue(chatRoomAtom);
  console.log('인포', chatInfo);
  return (
    <div className=" bg-surface w-full flex gap-x-[12px] content-center items-center p-[16px] border-b border-border-sub mt-0 sticky top-0">
      <div className="relative w-11 h-11">
        {chatInfo.accommodationUrl ? (
          <Image
            src={`${chatInfo.accommodationUrl}`}
            className="rounded-lg"
            alt="숙소사진"
            fill={true}
            sizes="(max-width: 640px) 50vw, 100vw"
          />
        ) : (
          <Image
            src={LOGOImage}
            className="rounded-lg object-fill animate-pulse delay-[2000ms]"
            alt="숙소사진"
            fill={true}
            sizes="(max-width: 640px) 50vw, 100vw"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className=" text-t2">
          {chatInfo.sellerId ? (
            <p>{chatInfo.sellerId}</p>
          ) : (
            <p className=" animate-pulse">로딩중...</p>
          )}
        </div>
        <div className="text-t3 font-semibold">
          {chatInfo.sellerId ? (
            <p>{chatInfo.productId}</p>
          ) : (
            <p className="animate-pulse delay-1000">로딩중...</p>
          )}
        </div>
      </div>
      {/* 가격 제안 페이지에서는 제안버튼 미노출 */}
      <DefaultBtn
        label="가격 제안하기"
        theme="basic"
        onClick={() => console.log('화이팅')}
      />
    </div>
  );
};

export default ProductInfo;
