import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRecoilValue } from 'recoil';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';

const AppoveMessage = ({ negoPrice, time, isSeller }: MessageProps) => {
  const router = useRouter();

  //판매중(onsale)외의 상태값인 경우 버튼 비활성화처리를 위함
  const chatInfo = useRecoilValue(chatRoomInfo);
  const ForSale = chatInfo.dealState === 'ONSALE' ? true : false;

  if (isSeller) {
    return (
      <>
        <p className=" text-gray-500 text-t3">{formatTime(time)}</p>
        <div className="w-full bg-white flex flex-col items-center box-border border border-border-sub rounded-md overflow-hidden">
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
          <div className="float-right w-full py-4 px-5">
            <p className="text-t2 font-semibold">제안을 승인했어요</p>
            <p className=" text-p2 text-gray-500">
              요청 금액: {formatCurrency(negoPrice)}원
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className=" text-gray-500 text-t3">{formatTime(time)}</p>
        <div className="w-full bg-white flex flex-col items-center box-border border border-border-sub rounded-md overflow-hidden">
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
          <div className="float-right w-full py-4 px-5">
            <p className="text-t2 font-semibold">제안이 승인됐어요</p>
            <p className="text-p2 text-gray-500 mt-1 mb-5">
              아래 결제하기 버튼을 통해 결제를 진행해주세요. (변경된 금액은 해당
              채팅창 내에서만 유효합니다.)
            </p>
            <SimpleButton
              name={`${formatCurrency(negoPrice)}` + '원 결제하기'}
              fn={() => router.push('/order')}
              disabled={!ForSale}
            />
          </div>
        </div>
      </>
    );
  }
};

export default AppoveMessage;
