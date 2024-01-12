'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  name: z.string().min(2).max(20),
});

type loginFormType = z.infer<typeof loginFormSchema>;

// eslint-disable-next-line
const fetchData = async (body: any) => {
  const data = await axios.post(
    'http://43.203.10.234:8080/members/signup',
    body,
  );
  console.log(data);
  return data;
};

const fetchFindData = async () => {
  const data = await axios.get(
    'http://13.124.240.142:8080/v1/chat/room/find?id=02d6b08d-60f8-4c21-b5b2-0ba7af752e29',
  );

  console.log(data);
  return data.data;
};

const TestComponent = () => {
  const mutation = useMutation({
    mutationKey: ['tesdddt'],
    // eslint-disable-next-line
    mutationFn: (body: any) => fetchData(body),
  });

  const { data } = useQuery({
    queryKey: ['find'],
    queryFn: () => fetchFindData(),
  });

  console.log(data);

  const { register, handleSubmit } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<loginFormType> = (data) => {
    if (!loginFormSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    mutation.mutate(data);
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="email">이메일</label>
        <input {...register('email')} />
        <label htmlFor="password">비밀번호</label>
        <input {...register('password')} />
        <label htmlFor="name">이름</label>
        <input {...register('name')} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default TestComponent;
