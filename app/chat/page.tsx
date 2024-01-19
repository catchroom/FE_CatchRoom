'use client';

import React from 'react';
import ChatList from '../../components/chat/chatList/index';
import Header from '@/components/common/header';
import BottomNav from '@/components/common/bottomNav';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/modal';
import { useRecoilState } from 'recoil';
import { isModalState } from '@/atoms/chat/leaveButton';

import { useMutation } from '@tanstack/react-query';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { creatChatRoom, loadedChatList } from '@/api/chat/api';

// 채팅방 생성하기
const createRoom = async () => {
  try {
    const result = await creatChatRoom('buyer1', 'seller1', 'product1');
    console.log(result);
  } catch (error) {
    console.error('failed:', error);
  }
};
createRoom();

//채팅방 리스트 불러오기
const chatLists = async () => {
  try {
    const result = await loadedChatList();
    console.log(result);
  } catch (error) {
    console.error('failed:', error);
  }
};
chatLists();

const MakeButton = () => {
  const mutation = useMutation({
    mutationFn: () => createRoom(),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onClick = () => {
    mutation.mutate();
  };

  return <SimpleButton fn={onClick} name="방 만들기" />;
};

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
    router.push('/chat');
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
      <MakeButton />
    </div>
  );
};

export default Page;
