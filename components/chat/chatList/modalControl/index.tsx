'use client';

import { deleteModalIdAtom, isModalState } from '@/atoms/chat/leaveButton';
import Modal from '@/components/common/modal';
import { useRoomConnection } from '@/hooks/useRoomConnection';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const ModalControl = () => {
  const router = useRouter();
  const { deleteRoom, connect, disconnect } = useRoomConnection();
  const deleteModalInfo = useRecoilValue(deleteModalIdAtom);
  const [isOpen, setIsOpen] = useRecoilState(isModalState);

  useEffect(() => {
    console.log('connect 연결');
    connect();
    return () => {
      console.log('disconnect 연결 해제');
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(deleteModalInfo);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCancle = () => {
    handleModalOpen();
  };
  const onConfirm = () => {
    handleModalOpen();
    deleteRoom(deleteModalInfo);
    router.push('/chat');
  };
  return (
    <>
      {isOpen && (
        <Modal
          title="채팅방 나가기"
          content="대화 내용이 모두 삭제됩니다"
          showConfirmButton={true}
          showCancelButton={true}
          onCancel={onCancle}
          onConfirm={onConfirm}
          confirmString="나가기"
        />
      )}
    </>
  );
};

export default ModalControl;
