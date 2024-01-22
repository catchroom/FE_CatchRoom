'use client';

import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

const fetchNewChatRoom = async (token: string) => {
  const data = await axios.post(
    'https://catchroom.xyz/v1/chat/room/create',
    {
      buyerId: 4,
      sellerId: 6,
      productId: 4,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await data.data;
  return result;
};

const MakeChattingButton = () => {
  const [cookies] = useCookies();
  const mutation = useMutation({
    mutationKey: ['newChatRoom'],
    mutationFn: () => fetchNewChatRoom(cookies.accessToken),
    onSuccess: (data) => {
      console.log(data, '성공데스');
    },
    onError: (error) => {
      console.log(error, '실패데스');
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return <SimpleButton name="채팅방 만들기" fn={handleClick} />;
};

export default MakeChattingButton;
