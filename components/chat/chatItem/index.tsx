'use client';
import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';
import { isModalState } from '@/atoms/chat/leaveButton';
import { useSetRecoilState } from 'recoil';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatItem = ({
  buyerId,
  chatRoomNumber,
  sellerId,
  productId,
  loginUserIdentity,
}: ChatRoomType) => {
  const router = useRouter();
  const setIsOpen = useSetRecoilState(isModalState);

  const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  console.log(buyerId, chatRoomNumber, sellerId, productId, loginUserIdentity);

  return (
    <div
      className="bg-white w-full h-18 flex gap-x-3 items-center px-4 py-3 border-solid border border-divider mb-[-1px] cursor-pointer"
      onClick={() => router.push(`/chat/chatRoom?chatId=${chatRoomNumber}`)}
    >
      {/* <Image
        src={image}
        className="rounded-[4px]"
        alt="숙소사진"
        width={48}
        height={48}
      /> */}
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
