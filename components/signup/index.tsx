'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AuthData } from '@/types/signup/types';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { commonInputStyle } from '@/components/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { authDataSchema } from '@/constants/zodSchema';
import Modal from '../common/modal';
import { emailState, passwordState } from '@/atoms/signup/signup';
import { useSetRecoilState } from 'recoil';
import { emailCheck } from '@/api/user/api';

const SignUpAuth = () => {
  const router = useRouter();
  const [confirmedEmail, setConfirmedEmail] = useState(false);

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  const checkEmail = async (email: string) => {
    if (email === '') {
      setError('email', {
        type: 'email',
        message: '이메일을 입력해주세요.',
      });
    } else if (errors.email?.message) {
      setError('email', {
        type: 'email',
        message: '이메일 형식을 확인해주세요.',
      });
    } else {
      emailCheck(email).then((response) => {
        console.log(response);
        if (response.code === 1012) {
          handleModalOpen();
          setConfirmedEmail(true);
        } else if (response.code === 1005) {
          setError('email', {
            type: 'email',
            message: '사용중인 이메일입니다.',
          });
        }
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    setError,
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

  useEffect(() => {
    setConfirmedEmail(false);
  }, [email]);

  const setEmail = useSetRecoilState(emailState);
  const setPassword = useSetRecoilState(passwordState);

  const onSubmit = (data: AuthData) => {
    if (confirmedEmail === true) {
      setEmail(data.email);
      setPassword(data.password);
      router.push('/signup/next');
    }
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
            {email && !confirmedEmail && (
              <div onClick={() => clearField('email')}>
                <DeleteIcon />
              </div>
            )}
            <div
              className="cursor-pointer font-bold text-p3 underline"
              onClick={() => checkEmail(email)}
            >
              중복확인
            </div>
          </div>
        </div>

        {open && (
          <Modal
            title="사용 가능한 이메일입니다."
            showConfirmButton={true}
            onConfirm={handleModalOpen}
            confirmString="확인"
          />
        )}

        {errors.email && errors.email.message && (
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
              isValid && confirmedEmail ? 'bg-focus' : 'bg-gray-300'
            }`}
            type="submit"
            disabled={!(isValid && confirmedEmail)}
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpAuth;
