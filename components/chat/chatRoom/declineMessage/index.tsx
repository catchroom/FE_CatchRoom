import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { useRecoilValue } from 'recoil';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';

const DeclineMessage = ({ negoPrice, time, isSeller }: MessageProps) => {
  const chatInfo = useRecoilValue(chatRoomInfo);

  const sellerStyle = isSeller
    ? 'flex items-end gap-3'
    : 'flex flex-row-reverse items-end gap-3';

  return (
    <div className={sellerStyle}>
      <p className={`text-gray-500 text-t3 `}>{formatTime(time)}</p>
      <div
        className={`w-60 bg-white flex flex-col items-center box-border border border-border-sub rounded-md overflow-hidden`}
      >
        {chatInfo.accommodationUrl ? (
          <div className="relative w-60 h-32">
            <Image
              src={chatInfo.accommodationUrl}
              className="object-cover"
              alt="숙소사진"
              fill
              priority
              sizes="(max-width: 640px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div className="relative w-60 h-32 bg-gray-300 animate-pulse">
            <svg
              className="object-cover w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" rx="8" fill="gray" />
            </svg>
          </div>
        )}
        <div className="float-right w-full p-4">
          {isSeller ? (
            <>
              <p className="text-t2 font-semibold">제안을 거절했어요</p>
              <p className="text-p2 text-gray-500">요청 금액: {negoPrice}원</p>
            </>
          ) : (
            <>
              <p className="text-t2 font-semibold">제안이 거절됐어요</p>
              <p className="text-p2 text-gray-500">
                제안한 가격은 유효하지 않습니다
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeclineMessage;
