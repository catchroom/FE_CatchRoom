'use client';

import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import Image from 'next/image';
import { deleteModalIdAtom, isModalState } from '@/atoms/chat/leaveButton';
import { useSetRecoilState } from 'recoil';
import { ChatMessageDto, ChatRoomType } from '@/types/chat/chatRoom/types';
import moment from 'moment';
import 'moment/locale/ko';
import { useRouter } from 'next/navigation';
import { truncate } from 'lodash-es';

const ChatItem = ({ item }: { item: ChatRoomType }) => {
  const setDeleteRoomInfo = useSetRecoilState(deleteModalIdAtom);
  const setIsOpen = useSetRecoilState(isModalState);
  const router = useRouter();

  // 최근 메세지 시간 보여주는 데이터
  const getRecentTime = (chatMessageDto: ChatMessageDto) => {
    if (!chatMessageDto) return '';
    else return moment(chatMessageDto.time).startOf('hour').fromNow();
  };

  // 최근 메세지 보여주는 데이터
  const viewRecentMessage = (chatMessageDto: ChatMessageDto) => {
    if (!chatMessageDto) return '최근 메세지가 없습니다.';
    else return chatMessageDto.message;
  };

  // 모달 열고 닫기
  const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setDeleteRoomInfo(item.chatRoomNumber);
    setIsOpen((prev) => !prev);
  };

  // 채팅방 클릭시 채팅방으로 이동
  const handleClick = () => {
    console.log('clickInfo', item);
    router.push(`/chat/${item.chatRoomNumber}`);
  };

  return (
    <div
      className=" w-full flex gap-3 items-center px-3 py-4 border border-divider bg-white cursor-pointer"
      onClick={handleClick}
    >
      {/* 채팅방 사진 보여주는 데이터 */}
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image
          src={item.accommodationUrl}
          className="rounded-md"
          alt="숙소사진"
          fill={true}
          priority
          sizes="(max-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="grow">
        <div data-testid="banner-top" className="flex items-center gap-2">
          <p className="text-t3 font-semibold text-text">
            {item.partnerNickName}
          </p>
          <p className="text-text-sub">
            {getRecentTime(item.lastChatmessageDto)}
          </p>
        </div>
        <p className="text-text text-t2">
          {truncate(viewRecentMessage(item.lastChatmessageDto), {
            length: 20,
            omission: '...',
          })}
        </p>
      </div>
      <div className="ml-auto" onClick={handleModalOpen}>
        <XSymbolIcon w={20} y={20} />
      </div>
    </div>
  );
};

export default ChatItem;
