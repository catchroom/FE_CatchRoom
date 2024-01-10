import React from 'react';
import DefaultBtn from '../../common/defaultBtn/index';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { useRouter } from 'next/navigation';

const AppoveMessage = ({ approvePrice, date, isSeller }: MessageProps) => {
  const router = useRouter();

  if (isSeller) {
    return (
      <>
        <p className=" text-gray-500 text-t3">{date}</p>
        <div className="w-full bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
          <img
            src="/productImage.png"
            className="w-full h-24 object-cover"
          ></img>
          <div className="float-right w-full p-4">
            <p className="text-t2 font-semibold">제안을 승인했어요</p>
            <p className="py-3 text-p2 text-gray-500">
              요청 금액: {approvePrice}원
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className=" text-gray-500 text-t3">{date}</p>
        <div className="w-full bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
          <img
            src="/productImage.png"
            className="w-full h-24 object-cover"
          ></img>
          <div className="float-right w-full p-4">
            <p className="text-t2 font-semibold">제안이 승인됐어요</p>
            <p className="py-3 text-p2 text-gray-500">
              아래 결제하기 버튼을 통해 결제를 진행해주세요. (변경된 금액은 해당
              채팅창 내에서만 유효합니다.)
            </p>
            <DefaultBtn
              label={`${approvePrice}` + '원 결제하기'}
              theme="primary"
              onClick={() => router.push('/order')}
            />
          </div>
        </div>
      </>
    );
  }
};

export default AppoveMessage;
