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
import { useRecoilValue } from 'recoil';
import { signUp, nicknameCheck, login, getNewToken } from '@/api/user/api';
import { emailState, passwordState } from '@/atoms/signup/signup';
import nookies from 'nookies';

const SignUpInfo = () => {
  const router = useRouter();
  const [confirmedNickname, setConfirmedNickname] = useState(false);

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

  const onSubmit = (data: UserInfo) => {
    if (confirmedNickname === true) {
      signUp(email, password, data.nickname, data.phone, data.name)
        .then((response) => {
          console.log(response);
          //성공시(코드가 1000)에 로그인하고, 로그인 성공시에는 마이페이지로 이동 시키기 router.push('/mypage');
          if (response.code === 1000) {
            login(email, password)
              .then((response) => {
                console.log(response);
                if (response.code === 1006) {
                  nookies.set(null, 'accessToken', response.data.accessToken, {
                    path: '/',
                  });
                  nookies.set(
                    null,
                    'refreshToken',
                    response.data.refreshToken,
                    {
                      path: '/',
                    },
                  );

                  // 액세스 토큰 요청 테스트용, apiClient 사용 예정이라 삭제하기
                  setTimeout(() => {
                    getNewToken().then((newToken) => {
                      console.log(newToken);
                    });
                  }, 1000);

                  router.push('/mypage');
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
        message: '닉네임을 입력해주세요.',
      });
    } else if (errors.nickname?.message) {
      setError('nickname', {
        type: 'nickname',
        message: '닉네임은 한글/영문/숫자 혼합해서 2~8자로 설정해주세요.',
      });
    } else {
      nicknameCheck(nickname).then((response) => {
        console.log(response);
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
              errors.name ? 'border-border-critical' : 'border-gray-400'
            }  `}
          />
          {name && (
            <div
              className="absolute right-3 top-[40%] transform -translate-y-1/2"
              onClick={() => clearField('name')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.name && (
          <p className="text-border-critical mb-3">{errors.name.message}</p>
        )}

        <div className="relative">
          <input
            placeholder="휴대폰번호"
            {...register('phone')}
            className={`${commonInputStyle} ${
              errors.phone ? 'border-border-critical' : 'border-gray-400'
            } `}
          />

          {phone && (
            <div
              className="absolute right-3 top-[40%] transform -translate-y-1/2"
              onClick={() => clearField('phone')}
            >
              <DeleteIcon />
            </div>
          )}
        </div>

        {errors.phone && (
          <p className="text-border-critical mb-3">{errors.phone.message}</p>
        )}

        <div className="relative">
          <input
            placeholder="닉네임"
            {...register('nickname')}
            className={`${commonInputStyle} ${
              errors.nickname ? 'border-border-critical' : 'border-gray-400'
            } `}
          />

          <div className="absolute right-3 top-[40%] transform -translate-y-1/2 flex items-center justify-end space-x-2 min-w-[200px]">
            {email && !confirmedNickname && (
              <div onClick={() => clearField('nickname')}>
                <DeleteIcon />
              </div>
            )}
            <div
              className="cursor-pointer font-bold text-p3 underline"
              onClick={() => checkNickname(nickname)}
            >
              중복확인
            </div>
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

        {errors.nickname && errors.nickname.message ? (
          <p className="text-border-critical mb-3">{errors.nickname.message}</p>
        ) : (
          <div className="text-gray-600 text-p2">
            2~12자, 한글/영문/숫자 혼합
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
