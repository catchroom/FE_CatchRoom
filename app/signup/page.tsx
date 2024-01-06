'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { SignupData } from '@/types/signup/types';
import DeleteIcon from '@/public/svgComponent/deleteIcon';

const Page = () => {
  const router = useRouter();
  const [state, setState] = useState<SignupData>({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<SignupData>({
    mode: 'onChange',
  });

  const email = watch('email');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  const clearField = (fieldName: 'email' | 'password' | 'passwordCheck') => {
    setValue(fieldName, '');
  };

  const onSubmit = (data: SignupData) => {
    setState(data);
    console.log(state);
  };

  return (
    <>
      <Header title="이메일 회원가입(1/2)" showBackButton />
      <div className="flex flex-col min-h-screen justify-between container mx-auto px-3 py-6 bg-primary">
        <div>
          <form
            className="flex flex-col flex-grow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative">
              <input
                placeholder="이메일"
                {...register('email', {
                  required:
                    '본인 소유의 연락가능한 이메일 주소를 사용해주세요.',
                })}
                className={`w-full h-[3.5rem] border-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-400'
                }  mb-3 flex flex-col items-start pl-3 rounded-md`}
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
              <p className="text-red-500 mb-3">{errors.email.message}</p>
            )}

            <div className="relative">
              <input
                placeholder="비밀번호"
                type="password"
                {...register('password', {
                  required:
                    '영문 + 숫자 + 특수문자 8~20자의 조합으로 설정해주세요.',
                })}
                className={`w-full h-[3.5rem] border-2 ${
                  errors.password ? 'border-red-500' : 'border-gray-400'
                }  mb-3 flex flex-col items-start pl-3 rounded-md`}
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

            {errors.password ? (
              <p className="text-red-500 mb-3">{errors.password.message}</p>
            ) : (
              <div className="text-gray-600 text-p2 mt-3 mb-4">
                영문+숫자+특수문자 8~20자리
              </div>
            )}

            <div className="relative">
              <input
                placeholder="비밀번호 재입력"
                type="password"
                {...register('passwordCheck', {
                  required: '동일한 비밀번호를 입력해주세요.',
                })}
                className={`w-full h-[3.5rem] border-2 ${
                  errors.passwordCheck ? 'border-red-500' : 'border-gray-400'
                }  mb-3 flex flex-col items-start pl-3 rounded-md`}
              />

              {passwordCheck && (
                <div
                  className="absolute right-3 top-[40%] transform -translate-y-1/2"
                  onClick={() => clearField('passwordCheck')}
                >
                  <DeleteIcon />
                </div>
              )}
            </div>

            {errors.passwordCheck && (
              <p className="text-red-500">{errors.passwordCheck.message}</p>
            )}

            <div className="w-full mt-5">
              <button
                className={`w-full h-[3.5rem] font-pretend text-t2 font-medium text-text-on rounded-md ${
                  isValid ? 'bg-focus' : 'bg-gray-300'
                }`}
                type="submit"
                onClick={() => {
                  router.push('/signup/next');
                }}
                disabled={!isValid}
              >
                다음
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
