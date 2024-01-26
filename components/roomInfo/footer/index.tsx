'use client';

import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
// import { useRoomItem } from '@/api/room-info/query';
import { useRecoilState } from 'recoil';
import { viewerTestButton } from '@/atoms/roomInfo/headerTitle';
import { UseParamsType } from '@/types/room-info/types';
import { useParams, useRouter } from 'next/navigation';
import { useRoomItem } from '@/api/room-info/query';
import { useCookies } from 'react-cookie';
import Modal from '@/components/common/modal';
import { useCreateChatRoom } from '@/api/chat/query';
import { useToastAlert } from '@/hooks/useToastAlert';

// 판매자 유무에 따른 버튼노출 처리 필요
// 현재 헤더의 화면전환 버튼을 이용한 전역상태로 바뀌는 중
const FooterComponent = () => {
  const [cookies] = useCookies();
  const mutation = useCreateChatRoom();
  const [viewerState] = useRecoilState(viewerTestButton);
  const [open, setOpen] = useState(false);
  const { alertOpenHandler } = useToastAlert('로그인이 필요한 서비스 입니다');
  const { alertOpenHandler: successOpenHandler } =
    useToastAlert('채팅방이 생성되었습니다.');

  const { id } = useParams() as UseParamsType;
  const router = useRouter();
  const { data } = useRoomItem(id);

  const sellerId: number = data?.data.seller_id;
  const accessToken = cookies.accessToken;
  const buyerId: number = cookies.userId;

  //채팅방 생성
  const createChat = async () => {
    if (accessToken === undefined) {
      setOpen(true);
      return;
    }
    await mutation.mutateAsync({
      buyerId,
      sellerId,
      productId: Number(id),
    });

    mutation.mutate(
      {
        buyerId,
        sellerId,
        productId: Number(id),
      },
      {
        onSuccess: (data) => {
          router.push(`/chat/${data}`);
          successOpenHandler();
        },
        onError: () => {
          alertOpenHandler();
        },
      },
    );
  };

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  const onCancel = () => {
    handleModalOpen();
  };

  const onConfirm = () => {
    handleModalOpen();
    router.push('/login');
  };

  const handlePurchaseClick = () => {
    if (accessToken === undefined) {
      setOpen(true);
    } else {
      router.push(`/order/${id}`);
    }
  };

  const buttonClass =
    'font-pretend h-full rounded-[4px] text-t1 font-semibold shadow-none';

  return (
    <>
      {open && (
        <Modal
          title="로그인 요청"
          content="로그인이 필요한 서비스 입니다"
          showConfirmButton={true}
          showCancelButton={true}
          confirmString="로그인 하기"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}

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
              className={`${buttonClass} w-1/2 bg-white border border-main text-p3 text-main`}
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
    </>
  );
};

export default FooterComponent;
