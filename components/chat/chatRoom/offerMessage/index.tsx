import React from 'react';
import { useRouter } from 'next/navigation';
import DefaultBtn from '../../common/defaultBtn/index';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { formatCurrency } from '@/utils/formatCurrency';

const OfferMessage = ({
  negoPrice,
  time,
  isSeller,
  accept,
  deny,
}: {
  negoPrice: number;
  time: string;
  isSeller: boolean;
  accept: (price: number) => void;
  deny: (price: number) => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const handleAccept = () => {
    console.log('accept');
    accept(negoPrice as number);
  };

  const handleDeny = () => {
    console.log('deny');
    deny(negoPrice as number);
  };

  return (
    <>
      <p className="text-gray-500 text-t3">{formatTime(time)}</p>
      <div className="w-full bg-white h-30 flex flex-col items-center border-[1px] border-gray-300 rounded-sm">
        <Image
          src="/productImage.png"
          className="w-full h-24 object-cover"
          alt="숙소사진"
          width={60}
          height={60}
        />
        <div className="float-right w-full p-4 ">
          <p className="text-t2 font-semibold pb-2">가격을 제안했어요</p>
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
    </>
  );
};

export default OfferMessage;
