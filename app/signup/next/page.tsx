'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type LoginData2 = {
  name: string;
  phone: string;
  nickname: string;
};

const Page = () => {
  const router = useRouter();
  const [state, setState] = useState<LoginData2>({
    name: '',
    phone: '',
    nickname: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData2>();

  const onSubmit = (data: LoginData2) => {
    setState(data);
    console.log(state);
  };

  return (
    <div className="w-[350px] mr-10 pr-10">
      <Header title="이메일로 회원가입(2/2)" showBackButton />
      <div className="w-full h-full flex flex-col px-5 mt-5 items-center bg-primary">
        <div className="flex w-screen h-screen mx-auto">
          <form
            className="w-[450px] flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="이름"
              {...register('name', {
                required: '이름을 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-6 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start self-stretch rounded-md"
            />

            <input
              placeholder="휴대폰번호"
              {...register('phone', {
                required: '휴대폰번호를 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-2 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start  rounded-md"
            />

            <input
              placeholder="닉네임"
              {...register('nickname', {
                required: '닉네임을 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-2 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start  rounded-md"
            />
            <div className="text-gray-600 text-p2">
              2~12자, 한글/영문/숫자 혼합
            </div>

            {errors.nickname && <p>{errors.nickname.message}</p>}

            <button
              className="w-[350px] h-[52px] bg-focus  font-pretend text-t2 font-medium text-text-on rounded-md mt-7"
              type="submit"
              onClick={() => {
                router.push('/login');
              }}
            >
              완료
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
