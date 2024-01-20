'use client';

import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { isModalState } from '@/atoms/chat/leaveButton';
import { useSetRecoilState } from 'recoil';
import { ChatRoomType } from '@/types/chat/chatRoom/types';

const ChatItem = ({ item }: { item: ChatRoomType }) => {
  const router = useRouter();
  const setIsOpen = useSetRecoilState(isModalState);

  // 모달 열고 닫기
  const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // 채팅방 클릭시 채팅방으로 이동
  const handleClick = () => {
    router.push(`/chat/chatRoom?chatId=${item.chatRoomNumber}`);
  };

  return (
    <div
      className=" w-full flex gap-3 items-center p-4 border border-divider bg-white cursor-pointer"
      onClick={handleClick}
    >
      {/* 채팅방 사진 보여주는 데이터 */}
      <div className="w-12 h-12 relative">
        <Image
          src={item.accommodationUrl}
          className="rounded-md"
          alt="숙소사진"
          fill={true}
          sizes="(max-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="grow">
        <div data-testid="banner-top" className="flex items-center">
          <p className="text-t3 font-semibold text-text">
            {item.partnerNickName}
          </p>
        </div>
        <div className="flex">
          <p className="line-clamp-1 text-text">
            lastMessage : {item.loginUserIdentity}
          </p>
        </div>
      </div>
      <div className="ml-auto" onClick={handleModalOpen}>
        <XSymbolIcon />
      </div>
    </div>
  );
};

export default ChatItem;
