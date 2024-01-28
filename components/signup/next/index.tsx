'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UserInfo } from '@/types/signup/types';
import { commonInputStyle } from '@/components/login';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { userInfoSchema } from '@/constants/zodSchema';
import Modal from '@/components/common/modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signUp, nicknameCheck, login } from '@/api/user/api';
import nookies from 'nookies';
import { emailState, passwordState } from '@/atoms/signup/signup';
import VerifiedIcon from '@/public/svgComponent/verifiedIcon';

const SignUpInfo = () => {
  const router = useRouter();
  const [confirmedNickname, setConfirmedNickname] = useState(false);

  const [clickedNameInput, setClickedNameInput] = useState(false);
  const [clickedPhoneInput, setClickedPhoneInput] = useState(false);
  const [clickedNickInput, setClickedNickInput] = useState(false);

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    setError,
  } = useForm<UserInfo>({
    mode: 'onChange',
    resolver: zodResolver(userInfoSchema),
  });

  const name = watch('name');
  const phone = watch('phone');
  const nickname = watch('nickname');

  const clearField = (fieldName: 'name' | 'phone' | 'nickname') => {
    setValue(fieldName, '');
  };

  useEffect(() => {
    setConfirmedNickname(false);
  }, [nickname]);

  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);

  const setEmail = useSetRecoilState(emailState);
  const setPassword = useSetRecoilState(passwordState);

  const onSubmit = (data: UserInfo) => {
    if (confirmedNickname === true) {
      signUp(email, password, data.nickname, data.phone, data.name)
        .then((response) => {
          if (response.code === 1000) {
            login(email, password)
              .then((response) => {
                if (response.code === 1006) {
                  setEmail('');
                  setPassword('');
                  nookies.set(null, 'accessToken', response.data.accessToken, {
                    path: '/',
                    maxAge: 60 * 30,
                  });
                  nookies.set(
                    null,
                    'refreshToken',
                    response.data.refreshToken,
                    {
                      path: '/',
                      maxAge: 60 * 60 * 24 * 2,
                    },
                  );
                  window.location.href = '/mypage';
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const checkNickname = async (nickname: string) => {
    if (nickname === '') {
      setError('nickname', {
        type: 'nickname',
        message:
          '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
      });
    } else if (errors.nickname?.message) {
      setError('nickname', {
        type: 'nickname',
        message:
          '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
      });
    } else {
      nicknameCheck(nickname).then((response) => {
        if (response.code === 1010) {
          handleModalOpen();
          setConfirmedNickname(true);
        } else if (response.code === 1011) {
          setError('nickname', {
            type: 'nickname',
            message: '사용중인 닉네임입니다.',
          });
        }
      });
    }
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            placeholder="이름"
            {...register('name')}
            className={`${commonInputStyle} ${
              errors.name
                ? 'border-border-critical'
                : clickedNameInput
                  ? 'border-border-primary'
                  : 'border-border-sub'
            } outline-none`}
            onClick={() => setClickedNameInput(true)}
            onBlur={() => setTimeout(() => setClickedNameInput(false), 200)}
          />
          {name && clickedNameInput && (
            <div
              className="absolute right-3 top-[50%] transform -translate-y-1/2"
              onClick={() => clearField('name')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.name && (
          <p className="text-border-critical mb-2 mt-2 text-p2">
            {errors.name.message}
          </p>
        )}

        <div className="relative">
          <input
            placeholder="휴대폰번호"
            {...register('phone')}
            className={`${commonInputStyle} ${
              errors.phone
                ? 'border-border-critical'
                : clickedPhoneInput
                  ? 'border-border-primary'
                  : 'border-border-sub'
            } outline-none`}
            onClick={() => setClickedPhoneInput(true)}
            onBlur={() => setTimeout(() => setClickedPhoneInput(false), 200)}
          />

          {phone && clickedPhoneInput && (
            <div
              className="absolute right-3 top-[50%] transform -translate-y-1/2"
              onClick={() => clearField('phone')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.phone && (
          <p className="text-border-critical mb-2 mt-2 text-p2">
            {errors.phone.message}
          </p>
        )}

        <div className="relative">
          <input
            placeholder="닉네임"
            {...register('nickname')}
            className={`${commonInputStyle} ${
              errors.nickname
                ? 'border-border-critical'
                : clickedNickInput
                  ? 'border-border-primary'
                  : 'border-border-sub'
            } outline-none`}
            onClick={() => setClickedNickInput(true)}
            onBlur={() => setTimeout(() => setClickedNickInput(false), 200)}
          />
          <div className="absolute right-3 top-[50%] transform -translate-y-1/2 flex items-center justify-end space-x-2 min-w-[200px]">
            {nickname && clickedNickInput && (
              <div onClick={() => clearField('nickname')}>
                <DeleteIcon />
              </div>
            )}
            {!confirmedNickname && (
              <div
                className="cursor-pointer font-bold text-p2 underline"
                onClick={() => checkNickname(nickname)}
              >
                중복확인
              </div>
            )}
            {confirmedNickname && <VerifiedIcon />}
          </div>
        </div>

        {open && (
          <Modal
            title="사용 가능한 닉네임입니다."
            showConfirmButton={true}
            onConfirm={handleModalOpen}
            confirmString="확인"
          />
        )}

        {!nickname ? (
          <div className="text-gray-600 text-p2">
            2~8자, 한글/영문/숫자 혼합
          </div>
        ) : errors.nickname && errors.nickname.message ? (
          <p className="text-border-critical text-p2 mb-2 mt-2">
            {errors.nickname.message}
          </p>
        ) : !confirmedNickname ? (
          <p className="text-border-critical text-p2 mb-2 mt-2">
            중복확인 필요합니다.
          </p>
        ) : (
          <div className="text-gray-600 text-p2">
            2~8자, 한글/영문/숫자 혼합
          </div>
        )}

        <div className="w-full mt-7">
          <button
            className={`w-full h-[3.5rem] font-pretend text-t2 font-medium text-text-on rounded-md ${
              isValid && confirmedNickname ? 'bg-focus' : 'bg-gray-300'
            }`}
            type="submit"
            onClick={() => {
              router.push('/login');
            }}
            disabled={!(isValid && confirmedNickname)}
          >
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpInfo;
