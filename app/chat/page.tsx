'use client';
import React from 'react';
import ChatList from '../../components/chat/chatList/index';
import Header from '@/components/common/header';
import BottomNav from '@/components/common/bottomNav';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/modal';
import { useRecoilState } from 'recoil';
import { isModalState } from '@/atoms/chat/leaveButton';

const Page = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(isModalState);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCancle = () => {
    handleModalOpen();
  };
  const onConfirm = () => {
    handleModalOpen();
    router.push('/login');
  };

  return (
    <div>
      <Header title="채팅" showBackButton />
      <ChatList />
      <BottomNav />
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
    </div>
  );
};

export default Page;
