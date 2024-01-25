'use client';

import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

const createNewRoom = async (token: string) => {
  const data = await axios.post(
    'https://catchroom.xyz/v1/chat/room/create',
    {
      buyerId: 4,
      sellerId: 28,
      productId: 108,
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
  console.log(data, 'data');
  return data.data;
};

const fetchLogin = async () => {
  const data = await axios.post(
    'https://catchroom.xyz/v1/user/login',
    {
      email: 'hyem5019@email.com',
      password: 'qweras!123',
      // email: 'test927@naver.com',
      // password: 'test927@',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const result = await data.data;
  console.log(result, 'result');
  return result;
};

const LoginButton = () => {
  const [cookies, setCookie] = useCookies();
  // 로그인
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: () => fetchLogin(),
    onSuccess: (data) => {
      setCookie('accessToken', data.data.accessToken);
      setCookie('refreshToken', data.data.refreshToken);
      setCookie('id', data.data.id);
      alert('로그인 되었습니다.');
    },
    onError: (error) => {
      console.log(error, '실패데스');
    },
  });

  // 토큰 재발급
  const mutation = useMutation({
    mutationKey: ['refreshToken'],
    mutationFn: (token: string) => fetchNewToken(token),
    onSuccess: (data) => {
      alert('새로운 토큰이 발급되었습니다.');
      setCookie('accessToken', data.data);
    },
    onError: (error) => {
      console.log(error, '실패데스');
    },
  });

  const createMutation = useMutation({
    mutationKey: ['newChatRoom'],
    mutationFn: (token: string) => createNewRoom(token),
    onSuccess: (data) => {
      console.log(data, '성공데스');
    },
    onError: (error) => {
      console.log(error, '실패데스');
    },
  });

  const loginHandleClick = () => {
    loginMutation.mutate();
  };

  const handleClick = () => {
    mutation.mutate(cookies.refreshToken);
  };

  const createHandleClick = () => {
    createMutation.mutate(cookies.accessToken);
  };

  return (
    <div className="flex gap-5">
      <SimpleButton name="로그인" fn={loginHandleClick} />
      <SimpleButton name="토큰 재발급" fn={handleClick} />
      <SimpleButton name="채팅방 생성 누르기 X" fn={createHandleClick} />
    </div>
  );
};

export default LoginButton;
