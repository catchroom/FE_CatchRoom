'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AuthData } from '@/types/signup/types';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { commonInputStyle } from '@/components/login';

const SignUpAuth = () => {
  const router = useRouter();
  const [state, setState] = useState<AuthData>({
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
  } = useForm<AuthData>({
    mode: 'onChange',
  });

  const email = watch('email');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  const clearField = (fieldName: 'email' | 'password' | 'passwordCheck') => {
    setValue(fieldName, '');
  };

  const onSubmit = (data: AuthData) => {
    setState(data);
    console.log(state);
  };

  return (
    <div>
      <form
        className="flex flex-col flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <input
            placeholder="이메일"
            {...register('email', {
              required: '본인 소유의 연락가능한 이메일 주소를 사용해주세요.',
            })}
            className={`${commonInputStyle} ${
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
            className={`${commonInputStyle} ${
              errors.password ? 'border-red-500' : 'border-gray-400'
            }  `}
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
            className={`${commonInputStyle} ${
              errors.passwordCheck ? 'border-red-500' : 'border-gray-400'
            }  `}
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
  );
};

export default SignUpAuth;
