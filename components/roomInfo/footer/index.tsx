'use client';

import React from 'react';
import { Button } from '@material-tailwind/react';
// import { UseParamsType } from '@/types/room-info/types';
// import { useParams } from 'next/navigation';
// import { useRoomItem } from '@/api/room-info/query';
import { useRecoilState } from 'recoil';
import { viewerTestButton } from '@/atoms/roomInfo/headerTitle';
import { UseParamsType } from '@/types/room-info/types';
import { useParams, useRouter } from 'next/navigation';
import { createChatRoom } from '@/api/chat/api';
import { useRoomItem } from '@/api/room-info/query';
import { useCookies } from 'react-cookie';

// 판매자 유무에 따른 버튼노출 처리 필요
// 현재 헤더의 화면전환 버튼을 이용한 전역상태로 바뀌는 중

const FooterComponent = () => {
  const [viewerState] = useRecoilState(viewerTestButton);
  const [cookies] = useCookies();
  const accessToken = cookies.accessToken;

  const { id } = useParams() as UseParamsType;
  console.log(id);
  const router = useRouter();
  const { data } = useRoomItem(id);

  const sellerId: number = data?.data.seller_id;
  const buyerId: number = cookies.id;

  //채팅방 생성
  const createChat = async () => {
    const chatRoomId: number = await createChatRoom(
      sellerId,
      buyerId,
      Number(id),
      accessToken,
    );
    router.push(`/chat/${chatRoomId}`);
  };


  const buttonClass =
    'font-pretend h-full rounded-[4px] text-t1 font-semibold shadow-none';

  return (
    <div className="fixed flex justify-center bottom-0 gap-2 w-full max-w-[480px] h-[5.75rem] p-5 bg-white border-t border-divider-sub z-10">
      {viewerState ? (
        <Button
          placeholder="Button"
          type="button"
          onClick={() => router.push('/chat')}
          className={`${buttonClass} w-full bg-main text-white`}
        >
          대화중인 채팅방
        </Button>
      ) : (
        <>
          <Button
            placeholder="Button"
            type="button"
            onClick={createChat}
            className={`${buttonClass} w-1/2 bg-white border border-main text-main`}
          >
            채팅으로 문의하기
          </Button>
          <Button
            placeholder="Button"
            type="button"
            onClick={() => console.log('구매하기 버튼 클릭')}
            className={`${buttonClass} w-1/2 bg-main text-white`}
          >
            구매하기
          </Button>
        </>
      )}
    </div>
  );
};

export default FooterComponent;
