'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { LoginData } from '@/types/login/types';
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
    setValue,
  } = useForm<LoginData>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const email = watch('email');
  const password = watch('password');

  const clearField = (fieldName: 'email' | 'password') => {
    setValue(fieldName, '');
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
              errors.email ? 'border-border-critical' : 'border-gray-400'
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
          <p className="mb-3 text-border-critical">{errors.email.message}</p>
        )}

        <div className="relative">
          <input
            placeholder="비밀번호"
            type="password"
            {...register('password')}
            className={`${commonInputStyle} ${
              errors.password ? 'border-border-critical' : 'border-gray-400'
            } `}
          />

          {password && (
            <div
              className="absolute right-3 top-[40%] transform -translate-y-1/2 text-border-critical"
              onClick={() => clearField('password')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.password && (
          <p className="mt-3 text-raspberry">{errors.password.message}</p>
        )}

        <div className="w-full mt-7">
          <button
            className="w-full h-[3.5rem] font-pretend text-t2 font-medium text-text-on rounded-md  bg-focus"
            type="submit"
          >
            로그인
          </button>
        </div>

        <div className="w-full h-[3rem] text-gray-600 flex justify-between px-5 mt-7 text-p2">
          <span className="relative pl-14">
            <Link href="https://www.yanolja.com/" className="underline">
              비밀번호 재설정
            </Link>
            <span className="absolute">
              <NextArrowIcon />
            </span>
          </span>
          |
          <span className="relative pr-20">
            <div className="underline cursor-pointer" onClick={handleOpenModal}>
              회원가입
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
