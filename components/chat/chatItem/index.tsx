'use client';
import React from 'react';
import CloseIcon from '@/public/svg/ph_x.svg';
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
      className="bg-white w-full h-18 flex gap-x-3 items-center px-4 py-3 border-solid border border-gray-300"
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
          <div className="text-t3 font-semibold pr-2">{sellerNickname}</div>
          <div className="text-p2 text-grey">{lastMessageDate}</div>
        </div>
        <div className="flex">
          <div className="line-clamp-1">{lastMessageContent}</div>
        </div>
      </div>
      <div className="ml-auto bg-gray-100 px-2 rounded-full text-black ml-2  ">
        1
      </div>
      <CloseIcon />
    </div>
  );
};

export default ChatItem;
