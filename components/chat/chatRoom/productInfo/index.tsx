'use client';
import React from 'react';
import DefaultBtn from '../../common/defaultBtn';
import Image from 'next/image';
import LOGOImage from '@/public/Yanolja_CI.png';
import LoadingText from '@/components/common/loading/loadingText';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dealModalAtom, userOutAtom } from '@/atoms/chat/leaveButton';
import { useRouter } from 'next/navigation';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';

const ProductInfo = () => {
  const [modalState, setModalOpen] = useRecoilState(dealModalAtom);
  const setUserOut = useRecoilValue(userOutAtom);
  const chatInfo = useRecoilValue(chatRoomInfo);
  const router = useRouter();

  const handleClickInfo = () => {
    router.push(`/room-info/${chatInfo.productId}`);
  };

  const handleNegoPrice = () => {
    setModalOpen(true);
  };

  const ViewOnSeller = chatInfo.loginUserIdentity === 'SELLER' ? true : false;
  const invalidSale = chatInfo.dealState === 'DONEDEAL' ? true : false;

  return (
    <div className="bg-surface w-full flex relative gap-3 items-center p-[16px] border-b border-border-sub">
      {invalidSale ||
        setUserOut ||
        (!chatInfo.isNego && (
          <div className="absolute opacity-60 bg-white inset-0 z-20" />
        ))}
      <div className="flex gap-3 items-center" onClick={handleClickInfo}>
        <div className="relative w-11 h-11">
          {chatInfo.accommodationUrl ? (
            <Image
              src={`${chatInfo.accommodationUrl}`}
              className="rounded-lg"
              alt="숙소사진"
              fill={true}
              priority
              sizes="(max-width: 640px) 50vw, 100vw"
            />
          ) : (
            <Image
              src={LOGOImage}
              className="rounded-lg object-fill animate-pulse delay-[2000ms]"
              alt="숙소사진"
              fill={true}
              sizes="(max-width: 640px) 50vw, 100vw"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div className=" text-t2">
            {LoadingText({
              condition: chatInfo.accommodationName ? true : false,
              viewText: chatInfo.accommodationName,
              loadingText: '로딩중...',
            })}
          </div>
          <div className="text-t3 font-semibold">
            {LoadingText({
              condition: chatInfo.sellPrice ? true : false,
              viewText: chatInfo.sellPrice,
              loadingText: '로딩중...',
            })}
          </div>
        </div>
      </div>
      {/* 가격 제안 페이지에서는 제안버튼 미노출 */}
      {!modalState && !ViewOnSeller && (
        <DefaultBtn
          label="가격 제안하기"
          theme="basic"
          onClick={handleNegoPrice}
        />
      )}
    </div>
  );
};

export default ProductInfo;
