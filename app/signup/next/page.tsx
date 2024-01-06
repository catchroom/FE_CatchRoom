'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UserInfo } from '@/types/signup/types';
import { commonInputStyle } from '@/app/login/email/page';

const Page = () => {
  const router = useRouter();
  const [state, setState] = useState<UserInfo>({
    name: '',
    phone: '',
    nickname: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfo>({
    mode: 'onChange',
  });

  const onSubmit = (data: UserInfo) => {
    setState(data);
    console.log(state);
  };

  return (
    <>
      <Header title="이메일로 회원가입(2/2)" showBackButton />
      <div className="flex flex-col container mx-auto px-3 py-6 bg-primary">
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="이름"
              {...register('name', {
                required: '이름을 입력해주세요.',
              })}
              className={`${commonInputStyle} ${
                errors.name ? 'border-red-500' : 'border-gray-400'
              }  `}
            />
            {errors.name && (
              <p className="text-red-500 mb-3">{errors.name.message}</p>
            )}

            <input
              placeholder="휴대폰번호"
              {...register('phone', {
                required: '휴대폰번호를 입력해주세요.',
              })}
              className={`${commonInputStyle} ${
                errors.phone ? 'border-red-500' : 'border-gray-400'
              } `}
            />
            {errors.phone && (
              <p className="text-red-500 mb-3">{errors.phone.message}</p>
            )}

            <div className="relative">
              <input
                placeholder="닉네임"
                {...register('nickname', {
                  required: '한글/영문/숫자 혼합해서 2~12자로 설정해주세요.',
                })}
                className={`${commonInputStyle} ${
                  errors.nickname ? 'border-red-500' : 'border-gray-400'
                } `}
              />
              <div className="cursor-pointer absolute right-3 top-[40%] transform -translate-y-1/2 font-bold text-p3 underline">
                중복체크
              </div>
            </div>

            {errors.nickname ? (
              <p className="text-red-500 mb-3">{errors.nickname.message}</p>
            ) : (
              <div className="text-gray-600 text-p2">
                2~12자, 한글/영문/숫자 혼합
              </div>
            )}

            <div className="w-full mt-7">
              <button
                className={`w-full h-[3.5rem] font-pretend text-t2 font-medium text-text-on rounded-md ${
                  isValid ? 'bg-focus' : 'bg-gray-300'
                }`}
                type="submit"
                onClick={() => {
                  router.push('/login');
                }}
                disabled={!isValid}
              >
                완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
