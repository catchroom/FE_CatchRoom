'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type LoginData = {
  email: string;
  password: string;
};

function Page() {
  const [state, setState] = useState<LoginData>({
    email: '',
    password: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    setState(data);
    console.log(state);
  };

  return (
    <>
      <Header title="로그인" showBackButton />
      <div className="flex w-screen h-screen px-4 py-6 mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="이메일"
            {...register('email', {
              required: '이메일과 비밀번호를 입력하세요.',
            })}
            className="border-b-2 w-4/5 mx-auto border-gray-400 focus:border-pink-500 mb-2"
          />

          {errors.password || errors.email ? (
            <div className="text-raspberry">
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          ) : null}

          <input
            placeholder="비밀번호"
            type="비밀번호"
            {...register('password', {
              required: '이메일과 비밀번호를 입력해주세요.',
            })}
            className="w-4/5 mx-auto border-b-2 border-gray-400 focus:border-pink-500 mb-2"
          />

          <div>
            <button className="mt-10 pink-600" type="submit">
              로그인
            </button>
          </div>

          <div className="flex justify-between ">
            <span>
              <Link href="">비밀번호 재설정</Link>
            </span>
            <span>
              <Link href="">이메일로 회원가입</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
