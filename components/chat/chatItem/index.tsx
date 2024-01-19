'use client';

import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { isModalState } from '@/atoms/chat/leaveButton';
import { useSetRecoilState } from 'recoil';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatItem = ({
  buyerId,
  chatRoomNumber,
  sellerId,
  productId,
  accommodationUrl,
  loginUserIdentity,
}: ChatRoomType) => {
  const router = useRouter();
  const setIsOpen = useSetRecoilState(isModalState);

  const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClick = () => {
    router.push(`/chat/chatRoom?chatId=${chatRoomNumber}`);
  };

  console.log(buyerId, chatRoomNumber, sellerId, productId, loginUserIdentity);

  return (
    <div
      className=" w-full flex gap-3 items-center p-4 border border-divider bg-white cursor-pointer"
      onClick={handleClick}
    >
      {/* 채팅방 사진 보여주는 데이터 */}
      <div className="w-12 h-12 relative">
        <Image
          src={accommodationUrl}
          className="rounded-md"
          alt="숙소사진"
          fill={true}
          sizes="(max-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="text-t3 font-semibold  text-text pr-2">{buyerId}</div>
          <div className="text-p2 text-text-sub">{chatRoomNumber}</div>
        </div>
        <div className="flex">
          <div className="line-clamp-1 text-text">{loginUserIdentity}</div>
          <div className=" bg-main px-[9px] py-[4px] rounded-full text-white text-p3 ml-2  ">
            1
          </div>
        </div>
      </div>
      <div className="ml-auto" onClick={handleModalOpen}>
        <XSymbolIcon />
      </div>
    </div>
  );
};

export default ChatItem;
