'use client';

import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { UseParamsType } from '@/types/room-info/types';
import { useParams, useRouter } from 'next/navigation';
import { useRoomItem } from '@/api/room-info/query';
import { useCookies } from 'react-cookie';
import Modal from '@/components/common/modal';
import { useChatRoomAvailable, useCreateChatRoom } from '@/api/chat/query';
import { useToastAlert } from '@/hooks/useToastAlert';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import SimpleBorderButton from '@/components/common/sheetsButtons/simpleBorderButton';

// 판매자 유무에 따른 버튼노출 처리 필요
// 현재 헤더의 화면전환 버튼을 이용한 전역상태로 바뀌는 중
const FooterComponent = () => {
  const [cookies] = useCookies();
  const mutation = useCreateChatRoom();
  const checkingMutation = useChatRoomAvailable();
  const [open, setOpen] = useState(false);

  // alert 발생
  const { alertOpenHandler } = useToastAlert('로그인이 필요한 서비스 입니다');
  const { alertOpenHandler: successOpenHandler } =
    useToastAlert('채팅방이 생성되었습니다.');
  const { alertOpenHandler: viewNoRoom } = useToastAlert(
    '채팅방을 나가서 새로운 채팅 생성이 불가능합니다.',
  );
  const { alertOpenHandler: viewNoRoom2 } =
    useToastAlert('채팅방 생성에 실패했습니다.');

  const { id } = useParams() as UseParamsType;
  const router = useRouter();
  const { data } = useRoomItem(id);

  const sellerId: number = data?.data.seller_id;
  const accessToken = cookies.accessToken;
  const buyerId: number = cookies.userId;

  //채팅방 생성
  const createChat = () => {
    if (accessToken === undefined) {
      setOpen(true);
      return;
    }

    mutation.mutate(
      {
        buyerId,
        sellerId,
        productId: Number(id),
      },
      {
        onSuccess: (data) => {
          const roomId = data;
          checkingMutation.mutate(data, {
            onSuccess: (data) => {
              if (data && data.buyerState === 'DONT_SEE') return viewNoRoom();
              router.push(`/chat/${roomId}`);
              return successOpenHandler();
            },
            onError: () => {
              viewNoRoom2();
              alertOpenHandler();
            },
          });
        },
        onError: () => {
          viewNoRoom2();
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
        {data?.userIdentity === 'SELLER' ? (
          <Button
            placeholder="Button"
            type="button"
            onClick={() => router.push('/chat')}
            className={`${buttonClass} w-full bg-main text-white`}
          >
            대화중인 채팅방
          </Button>
        ) : (
          <div className="w-full flex gap-3">
            <SimpleBorderButton
              name="채팅으로 문의하기"
              type="button"
              fn={createChat}
            />
            <SimpleButton
              name="구매하기"
              type="button"
              fn={handlePurchaseClick}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FooterComponent;
