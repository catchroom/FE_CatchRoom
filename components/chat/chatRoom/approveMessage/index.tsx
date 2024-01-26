import React from 'react';
import { MessageItemType } from '@/types/chat/chatRoom/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRecoilValue } from 'recoil';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { chatPosition } from '@/utils/get-chat-style';

const AppoveMessage = ({ negoPrice, time, isSeller, me }: MessageItemType) => {
  const router = useRouter();

  //판매중(onsale)외의 상태값인 경우 버튼 비활성화처리를 위함
  const chatInfo = useRecoilValue(chatRoomInfo);
  const ForSale = chatInfo.dealState === 'ONSALE' ? true : false;

  const style = chatPosition(me, isSeller);

  if (isSeller) {
    return (
      <div className="flex items-end gap-3">
        <p className={`${'ml-auto'} text-gray-500 bg-raspberry text-t3`}>
          {formatTime(time)}
        </p>
        <div
          className={`w-60 ${
            me ? 'mr-auto' : 'ml-auto'
          } bg-white flex flex-col items-center box-border border border-border-sub rounded-t rounded-md overflow-hidden`}
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
          <div className="float-right w-full py-4 px-5">
            <p className="text-t2 font-semibold">제안을 승인했어요</p>
            <p className=" text-p2 text-gray-500">
              요청 금액: {formatCurrency(negoPrice)}원
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-end flex-row-reverse gap-3">
        <p className={`${style} text-gray-500 text-t3`}>{formatTime(time)}</p>
        <div
          className={`w-60 ${style} bg-white flex flex-col items-center box-border border border-border-sub rounded-t rounded-md overflow-hidden`}
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
      </div>
    );
  }
};

export default AppoveMessage;
