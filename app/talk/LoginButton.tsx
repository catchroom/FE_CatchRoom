'use client';

import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

const fetchNewToken = async (token: string) => {
  const data = await axios.post(
    'https://catchroom.xyz/v1/user/accesstoken',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data.data;
};

const LoginButton = () => {
  const [cookies] = useCookies(['refreshToken']);
  const mutation = useMutation({
    mutationKey: ['refreshToken'],
    mutationFn: (token: string) => fetchNewToken(token),
    onSuccess: (data) => {
      console.log(data, '성공데스');
    },
    onError: (error) => {
      console.log(error, '실패데스');
    },
  });

  const handleClick = () => {
    mutation.mutate(cookies.refreshToken);
  };

  return (
    <div>
      <SimpleButton name="토큰 재발급" fn={handleClick} />
    </div>
  );
};

export default LoginButton;
