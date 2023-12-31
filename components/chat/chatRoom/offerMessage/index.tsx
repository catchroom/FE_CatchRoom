import { MessageProps } from '@/types/chat/chatRoom/types';
import React from 'react';
import { useRouter } from 'next/navigation';
import DefaultBtn from '../../common/defaultBtn/index';

const OfferMessage = ({ offerPrice, date, isSeller }: MessageProps) => {
  const router = useRouter();
  if (isSeller) {
    return (
      <>
        <p className="text-gray-500 text-t3">{date}</p>
        <div className="w-full bg-white w-56 h-30 flex flex-col items-center border-[1px] border-gray-300 rounded-sm">
          <img
            src="/productImage.png"
            className="w-full h-28  object-cover"
          ></img>
          <div className="float-right w-full p-4 ">
            <p className="text-t2 font-semibold pb-2">가격을 제안했어요</p>
            <p className="text-p2 text-gray-500">요청 금액: {offerPrice}원</p>
          </div>
          <div className="flex w-full gap-1 px-4 pb-4">
            <DefaultBtn
              label="거절하기"
              theme="secondary"
              onClick={() => router.push('/chat')}
            />
            <DefaultBtn
              label="승인하기"
              theme="primary"
              onClick={() => router.push('/chat')}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="text-gray-500 text-t3">{date}</p>
        <div className="w-full bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm">
          <img
            src="/productImage.png"
            className="w-full h-28 object-cover"
          ></img>
          <div className="float-right w-full p-5">
            <p className="text-t2 font-semibold pb-2">가격을 제안했어요</p>
            <p className="text-p2 text-gray-500">승인 금액: {offerPrice}원</p>
          </div>
        </div>
      </>
    );
  }
};

export default OfferMessage;
