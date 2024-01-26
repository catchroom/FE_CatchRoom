import React from 'react';
import { useRouter } from 'next/navigation';
import DefaultBtn from '../../common/defaultBtn/index';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRecoilValue } from 'recoil';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';

const OfferMessage = ({
  negoPrice,
  time,
  isSeller,
  accept,
  deny,
}: {
  me: boolean;
  negoPrice: number;
  time: string;
  isSeller: boolean;
  accept: (price: number) => void;
  deny: (price: number) => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const chatInfo = useRecoilValue(chatRoomInfo);

  const handleAccept = () => {
    console.log('accept');
    accept(negoPrice as number);
  };

  const handleDeny = () => {
    console.log('deny');
    deny(negoPrice as number);
  };

  const sellerStyle = isSeller
    ? 'flex flex-row-reverse items-end gap-3'
    : 'flex items-end gap-3';

  return (
    <div className={sellerStyle}>
      <p className={`text-gray-500 text-t3`}>{formatTime(time)}</p>
      <div
        className={`w-60 bg-white flex flex-col box-border border border-gray-300 rounded-md overflow-hidden`}
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
        <div className="w-full px-5 py-4">
          <p className="text-t2 font-semibold">가격을 제안했어요</p>
          <p className="text-p2 text-gray-500">
            요청 금액: {formatCurrency(negoPrice)}원
          </p>
        </div>
        {isSeller && (
          <div className="flex w-full gap-1 px-4 pb-4">
            <DefaultBtn
              label="거절하기"
              theme="secondary"
              onClick={handleDeny}
            />
            <DefaultBtn
              label="승인하기"
              theme="primary"
              onClick={handleAccept}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferMessage;
