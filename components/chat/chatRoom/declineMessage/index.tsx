import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import Image from 'next/image';

const DeclineMessage = ({ offerPrice, date, isSeller }: MessageProps) => {
  return (
    <>
      <p className=" text-gray-500 text-t3">{date}</p>
      <div className="bg-white w-full h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
        <Image
          src="/productImage.png"
          className="w-full h-24 object-cover"
          alt="숙소사진"
          width={60}
          height={60}
        />
        <div className="float-right w-full p-4">
          {isSeller ? (
            <>
              <p className="text-t2 font-semibold">제안을 거절했어요</p>
              <p className="py-3 text-p2 text-gray-500">
                요청 금액: {offerPrice}원
              </p>
            </>
          ) : (
            <>
              <p className="text-t2 font-semibold">제안이 거절됐어요</p>
              <p className="py-3 text-p2 text-gray-500">
                제안한 가격은 유효하지 않습니다
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DeclineMessage;
