'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { LoginData } from '@/types/login/types';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import NextArrowIcon from '@/public/svgComponent/nextArrow';
import LoginSheet from '@/components/loginSheets';

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

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
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
              className={`w-full h-[3.5rem] border-[1.5px]  ${
                errors.email ? 'border-red-500' : 'border-gray-400'
              }  mb-3 flex flex-col items-start pl-3 rounded-md`}
            />

            {errors.email && (
              <p className="mb-3 text-red-500">{errors.email.message}</p>
            )}

            <input
              placeholder="비밀번호"
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
              className={`w-full h-[3.5rem] border-[1.5px] ${
                errors.password ? 'border-red-500' : 'border-gray-400'
              } flex flex-col items-start pl-3 rounded-md`}
            />

            {errors.password && (
              <p className="mt-3 text-red-500">{errors.password.message}</p>
            )}

            <div className="mt-7">
              <SimpleButton name=" 로그인" type="submit" />
            </div>

            <div className="w-full h-[3rem] text-gray-600 flex justify-between px-5 mt-7 text-p2">
              <span className="relative pl-11">
                <Link href="https://www.yanolja.com/" className="underline">
                  비밀번호 재설정
                </Link>
                <span className="absolute">
                  <NextArrowIcon />
                </span>
              </span>
              |
              <span className="relative pr-11">
                <div
                  className="underline cursor-pointer"
                  onClick={handleOpenModal}
                >
                  이메일로 회원가입
                  <span className="absolute">
                    <NextArrowIcon />
                  </span>
                  <LoginSheet open={open} setOpen={setOpen} />
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
