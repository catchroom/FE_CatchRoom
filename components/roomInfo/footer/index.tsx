'use client';

import React from 'react';
import { Button } from '@material-tailwind/react';
import { UseParamsType } from '@/types/room-info/types';
import { useParams } from 'next/navigation';
// import { useRoomItem } from '@/api/room-info/query';
import { useRecoilState } from 'recoil';
import { viewerTestButton } from '@/atoms/roomInfo/headerTitle';
import { useRouter } from 'next/navigation';

// 판매자 유무에 따른 버튼노출 처리 필요
// 현재 헤더의 화면전환 버튼을 이용한 전역상태로 바뀌는 중
const FooterComponent = () => {
  const router = useRouter();
  const [viewerState] = useRecoilState(viewerTestButton);

  // 지민님 작업 끝나시면 이어서 할 예정.
  const { id } = useParams() as UseParamsType;
  // const { data } = useRoomItem(id);
  // const userState = data?.data.userIdentity;

  const handlePurchaseClick = () => {
    router.push(`/order/${id}`);
  };

  const buttonClass =
    'font-pretend h-full rounded-[4px] text-t1 font-semibold shadow-none';

  return (
    <div className="fixed flex justify-center bottom-0 gap-2 w-full max-w-[480px] h-[5.75rem] p-5 bg-white border-t border-divider-sub z-10">
      {viewerState ? (
        <Button
          placeholder="Button"
          type="button"
          onClick={() => console.log('대화중인 채팅방')}
          className={`${buttonClass} w-full bg-main text-white`}
        >
          대화중인 채팅방
        </Button>
      ) : (
        <>
          <Button
            placeholder="Button"
            type="button"
            onClick={() => console.log('채팅하기 버튼 클릭')}
            className={`${buttonClass} w-1/2 bg-white border border-main text-main`}
          >
            채팅으로 문의하기
          </Button>
          <Button
            placeholder="Button"
            type="button"
            onClick={handlePurchaseClick}
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
