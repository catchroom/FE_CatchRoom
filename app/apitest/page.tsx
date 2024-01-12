'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  name: z.string().min(2).max(20),
  phone: z.string().min(10).max(11),
  nickname: z.string().min(2).max(20),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type loginType = z.infer<typeof loginSchema>;
type loginFormType = z.infer<typeof loginFormSchema>;

const fetchUser = async (body: loginFormType) => {
  const data = await axios.post('/api/v1/user/register', body);
  return data;
};

const fetchLogin = async (body: loginType) => {
  const data = await axios.post('/api/v1/user/login', body);
  return data;
};

const LoginComponent = () => {
  const { register, handleSubmit } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: (body: loginType) => fetchLogin(body),

    onError: (error) => {
      console.log(error);
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit: SubmitHandler<loginType> = (data) => {
    if (!loginSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    mutation.mutate(data);
    mutation.isSuccess && alert('로그인 성공!');
    mutation.isError && alert('로그인 실패!');
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label htmlFor="email">이메일</label>
        <input {...register('email')} />
        <label htmlFor="password">비밀번호</label>
        <input {...register('password')} />
        <SimpleButton type="submit" name="로그인" />
      </form>
    </div>
  );
};

export const EmailCheckSchema = z.object({
  email: z.string().email(),
});

type EmailCheckType = z.infer<typeof EmailCheckSchema>;

const checkLogin = async (body: EmailCheckType) => {
  const data = await axios.post('/api/v1/user/emailcheck', body);
  return data;
};

const EmailCheckComponent = () => {
  const { register, handleSubmit } = useForm<EmailCheckType>({
    resolver: zodResolver(EmailCheckSchema),
  });

  const mutation = useMutation({
    mutationFn: (body: EmailCheckType) => checkLogin(body),

    onError: (error) => {
      console.log(error);
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit: SubmitHandler<EmailCheckType> = (data) => {
    if (!EmailCheckSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');

    console.log(data);
    mutation.mutate(data);
    mutation.isSuccess && alert('이메일 사용할 수 있습니다.');
    mutation.isError && alert('이거 못 사용하는 거에요');
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label htmlFor="email">이메일 중복 체크</label>
        <input {...register('email')} />
        <SimpleButton type="submit" name="이메일 중복 체크" />
      </form>
    </div>
  );
};

export const AccessTokenSchema = z.object({
  refreshtoken: z.string(),
});

type AccessTokenType = z.infer<typeof AccessTokenSchema>;

const fetchToken = async (body: AccessTokenType) => {
  const data = await axios.post('/api/v1/user/accesstoken', body);
  return data;
};

const AccessTokenComponent = () => {
  const { register, handleSubmit } = useForm<AccessTokenType>({
    resolver: zodResolver(AccessTokenSchema),
  });

  const mutation = useMutation({
    mutationFn: (body: AccessTokenType) => fetchToken(body),

    onError: (error) => {
      console.log(error);
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit: SubmitHandler<AccessTokenType> = (data) => {
    if (!AccessTokenSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    mutation.mutate(data);
    mutation.isSuccess && alert('토큰토큰');
    mutation.isError && alert('로그인 할 자격이 없으시네요 ㅋㅋ...🤸‍♂️');

    // mutation 데이터 받아오기
    mutation.data && console.log(mutation.data);
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label htmlFor="refreshtoken">토큰확인</label>
        <input {...register('refreshtoken')} />
        <SimpleButton type="submit" name="토큰확인" />
      </form>
    </div>
  );
};

const TestComponent = () => {
  const { register, handleSubmit } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const mutation = useMutation({
    mutationFn: (body: loginFormType) => fetchUser(body),
  });

  const onSubmit: SubmitHandler<loginFormType> = (data) => {
    if (!loginFormSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    const sendData = {
      email: data.email,
      password: data.password,
      name: data.name,
      phone: data.phone,
      nickname: data.nickname,
      account_number: '1234-56-789-01',
      account_owner: data.name,
      balance: 10000,
      bank: 'kakaobank',
      type: 'normal',
    };

    mutation.mutate(sendData);
    mutation.isSuccess && alert('회원가입 성공!');
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="email">이메일</label>
          <input {...register('email')} />
          <label htmlFor="password">비밀번호</label>
          <input {...register('password')} />
          <label htmlFor="name">이름</label>
          <input {...register('name')} />
          <label htmlFor="phone">전화번호</label>
          <input {...register('phone')} />
          <label htmlFor="nickname">닉네임</label>
          <input {...register('nickname')} />
          <button type="submit">전송</button>
        </form>
      </div>

      <LoginComponent />
      <EmailCheckComponent />
      <AccessTokenComponent />
    </div>
  );
};

export default TestComponent;
