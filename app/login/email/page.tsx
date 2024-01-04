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
    <div className="w-[350px] mr-10 pr-10">
      <Header title="이메일로 로그인" showBackButton />
      <div className="w-full h-full flex flex-col px-5 mt-5 items-center bg-primary">
        <div className="flex w-screen h-screen mx-auto">
          <form
            className="w-[450px] flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="이메일"
              {...register('email', {
                required: '이메일과 비밀번호를 입력하세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-6 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start self-stretch rounded-md"
            />

            {errors.password || errors.email ? (
              <div className="text-raspberry">
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            ) : null}

            <input
              placeholder="비밀번호"
              type="password"
              {...register('password', {
                required: '이메일과 비밀번호를 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-2 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start  rounded-md"
            />

            <button
              className="w-[350px] h-[52px] bg-focus  font-pretend text-t2 font-medium text-text-on rounded-md mt-7"
              type="submit"
            >
              로그인
            </button>

            <div className="w-[350px] flex justify-between px-5 mt-7 text-p2">
              <span className="pl-7">
                <Link
                  href="https://www.yanolja.com/"
                  className="hover:underline"
                >
                  비밀번호 재설정
                </Link>
              </span>
              <span className="pr-8">
                <Link href="/signup" className="hover:underline">
                  이메일로 회원가입
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
