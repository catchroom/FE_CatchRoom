'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { LoginData } from '@/types/login/types';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import NextArrowIcon from '@/public/svgComponent/nextArrow';
import LoginSheet from '@/components/loginSheets';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/constants/zodSchema';

export const commonInputStyle =
  'w-full h-[3.5rem] border-[1.5px] mb-3 flex flex-col items-start pl-3 rounded-md';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<LoginData>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const email = watch('email');
  const password = watch('password');

  const clearField = (fieldName: 'email' | 'password') => {
    reset({ [fieldName]: '' });
  };

  const onSubmit = (data: LoginData) => {
    //백엔드로 data를 post하기
    console.log(data);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            placeholder="이메일"
            {...register('email')}
            className={`${commonInputStyle}  ${
              errors.email ? 'border-red-500' : 'border-gray-400'
            }  `}
          />
          {email && (
            <div
              className="absolute right-3 top-[40%] transform -translate-y-1/2"
              onClick={() => clearField('email')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.email && (
          <p className="mb-3 text-red-500">{errors.email.message}</p>
        )}

        <div className="relative">
          <input
            placeholder="비밀번호"
            type="password"
            {...register('password')}
            className={`${commonInputStyle} ${
              errors.password ? 'border-red-500' : 'border-gray-400'
            } `}
          />

          {password && (
            <div
              className="absolute right-3 top-[40%] transform -translate-y-1/2"
              onClick={() => clearField('password')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.password && (
          <p className="mt-3 text-red-500">{errors.password.message}</p>
        )}

        <div className="mt-7 cursor-pointer">
          <SimpleButton name="로그인" type="submit" />
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
            <div className="underline cursor-pointer" onClick={handleOpenModal}>
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
  );
};

export default LoginForm;
