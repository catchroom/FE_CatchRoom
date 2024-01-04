'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type LoginData = {
  email: string;
  password: string;
};

const Page = () => {
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
      <Header title="이메일로 로그인" showBackButton />
      <div className="flex flex-col container mx-auto px-3 py-6 bg-primary">
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="이메일"
              {...register('email', {
                required: '이메일을 입력하세요.',
              })}
              className="w-full h-[3rem] border-2 border-gray-400 focus:border-pink-700 mb-3 flex flex-col items-start pl-3 rounded-md"
            />

            {errors.email && <p>{errors.email.message}</p>}
            <input
              placeholder="비밀번호"
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
              className="w-full h-[3rem] border-2 border-gray-400 focus:border-pink-700 mb-3 flex flex-col items-start  pl-3 rounded-md"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button
              className="w-full h-[3rem]  bg-focus  font-pretend text-t2 font-medium text-text-on rounded-md mt-7"
              type="submit"
            >
              로그인
            </button>

            <div className="w-full h-[3rem] text-gray-600 flex justify-between px-5 mt-7 text-p2">
              <span className="pl-11">
                <Link
                  href="https://www.yanolja.com/"
                  className="hover:underline"
                >
                  비밀번호 재설정
                </Link>
              </span>
              |
              <span className="pr-11">
                <Link href="/signup" className="hover:underline">
                  이메일로 회원가입
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
