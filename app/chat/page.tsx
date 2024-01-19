'use client';

import React from 'react';
import ChatList from '../../components/chat/chatList/index';
import Header from '@/components/common/header';
import BottomNav from '@/components/common/bottomNav';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/modal';
import { useRecoilState } from 'recoil';
import { isModalState } from '@/atoms/chat/leaveButton';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';

const ACCESSTOKEN = '6231025e-0347-4ae3-9fdd-dd4e6cbb5abe';

const createRoom = async () => {
  const data = await axios.post(
    'http://localhost:3000/v1/chat/room/create',
    {
      buyerId: 'buyer1',
      sellerId: 'seller1',
      productId: 'product1',
    },
    {
      headers: {
        Authorization: `Bearer ${ACCESSTOKEN}`,
      },
    },
  );
  console.log(data);
  console;
  return data;
};

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
      <MakeButton />
    </div>
  );
};

export default Page;
