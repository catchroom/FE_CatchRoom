'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AuthData } from '@/types/signup/types';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { commonInputStyle } from '@/components/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { authDataSchema } from '@/constants/zodSchema';

const SignUpAuth = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authDataSchema),
  });

  const email = watch('email');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  const clearField = (fieldName: 'email' | 'password' | 'passwordCheck') => {
    setValue(fieldName, '');
  };

  const onSubmit = (data: AuthData) => {
    //백엔드로 data를 post하기
    console.log(data);
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
            {...register('email')}
            className={`${commonInputStyle} ${
              errors.email ? 'border-border-critical' : 'border-gray-400'
            }  `}
          />

          <div className="absolute right-3 top-[40%] transform -translate-y-1/2 flex items-center justify-end space-x-2 min-w-[200px]">
            {email && (
              <div onClick={() => clearField('email')}>
                <DeleteIcon />
              </div>
            )}
            <div className="cursor-pointer font-bold text-p3 underline">
              중복확인
            </div>
          </div>
        </div>

        {errors.email && (
          <p className="text-border-critical mb-3">{errors.email.message}</p>
        )}

        <div className="relative">
          <input
            placeholder="비밀번호"
            type="password"
            {...register('password')}
            className={`${commonInputStyle} ${
              errors.password ? 'border-border-critical' : 'border-gray-400'
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
          <p className="text-border-critical mb-3">{errors.password.message}</p>
        ) : (
          <div className="text-gray-600 text-p2 mt-3 mb-4">
            영문+숫자+특수문자 8~20자리
          </div>
        )}

        <div className="relative">
          <input
            placeholder="비밀번호 재입력"
            type="password"
            {...register('passwordCheck')}
            className={`${commonInputStyle} ${
              errors.passwordCheck
                ? 'border-border-critical'
                : 'border-gray-400'
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
          <p className="text-border-critical">{errors.passwordCheck.message}</p>
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
