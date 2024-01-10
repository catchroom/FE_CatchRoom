'use client';
import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import { chatItemProps } from '@/types/chat/chatItem/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ChatItem = ({
  itemId,
  image,
  sellerNickname,
  lastMessageDate,
  lastMessageContent,
}: chatItemProps) => {
  const router = useRouter();
  return (
    <div
      className="bg-white w-full h-18 flex gap-x-3 items-center px-4 py-3 border-solid border border-divider mb-[-1px] cursor-pointer"
      onClick={() => router.push(`/chat/chatRoom?chatId=${itemId}`)}
    >
      <Image
        src={image}
        className="rounded-[4px]"
        alt="숙소사진"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="text-t3 font-semibold  text-text pr-2">
            {sellerNickname}
          </div>
          <div className="text-p2 text-text-sub">{lastMessageDate}</div>
        </div>
        <div className="flex">
          <div className="line-clamp-1 text-text">{lastMessageContent}</div>
          <div className=" bg-main px-[9px] py-[4px] rounded-full text-white text-p3 ml-2  ">
            1
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <XSymbolIcon />
      </div>
    </div>
  );
};

export default ChatItem;
