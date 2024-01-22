import React from 'react';
import DefaultBtn from '../../common/defaultBtn/index';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatTime } from '@/utils/formatTime';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRecoilState } from 'recoil';
import { chatRoomAtom } from '@/atoms/chat/chatContentAtom';

const AppoveMessage = ({ negoPrice, time, isSeller }: MessageProps) => {
  const router = useRouter();

  //판매중(onsale)외의 상태값인 경우 버튼 비활성화처리를 위함
  const [isChatRoomInfo] = useRecoilState(chatRoomAtom);
  const dealState = isChatRoomInfo.dealState;

  if (isSeller) {
    return (
      <>
        <p className=" text-gray-500 text-t3">{formatTime(time)}</p>
        <div className="w-full bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
          <Image
            src="/productImage.png"
            className="w-full h-24 object-cover"
            alt="숙소사진"
            width={60}
            height={60}
          />
          <div className="float-right w-full p-4">
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
        <div className="w-full bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
          <Image
            src="/productImage.png"
            className="w-full h-24 object-cover"
            alt="숙소사진"
            width={60}
            height={60}
          />
          <div className="float-right w-full p-4">
            <p className="text-t2 font-semibold">제안이 승인됐어요</p>
            <p className="text-p2 text-gray-500 mt-2 mb-4">
              아래 결제하기 버튼을 통해 결제를 진행해주세요. (변경된 금액은 해당
              채팅창 내에서만 유효합니다.)
            </p>
            {dealState == 'ONSALE' ? (
              <DefaultBtn
                label={`${formatCurrency(negoPrice)}` + '원 결제하기'}
                theme="primary"
                onClick={() => router.push('/order')}
              />
            ) : (
              <DefaultBtn
                label={`${formatCurrency(negoPrice)}` + '원 결제하기'}
                theme="disabled"
                onClick={() => router.push('/order')}
              />
            )}
          </div>
        </div>
      </>
    );
  }
};

export default AppoveMessage;
