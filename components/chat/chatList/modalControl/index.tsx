'use client';

import { deleteModalIdAtom, isModalState } from '@/atoms/chat/leaveButton';
import Modal from '@/components/common/modal';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const ModalControl = ({
  deleteRoom,
}: {
  deleteRoom: (roomId: string) => void;
}) => {
  const router = useRouter();
  const deleteModalInfo = useRecoilValue(deleteModalIdAtom);
  const [isOpen, setIsOpen] = useRecoilState(isModalState);

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
