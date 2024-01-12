'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UserInfo } from '@/types/signup/types';
import { commonInputStyle } from '@/components/login';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { userInfoSchema } from '@/constants/zodSchema';
import Modal from '@/components/common/modal';

const SignUpInfo = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  const onConfirm = () => {
    handleModalOpen();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
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
  const onSubmit = (data: UserInfo) => {
    //백엔드로 data를 post하기
    console.log(data);
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
            {nickname && (
              <div onClick={() => clearField('nickname')}>
                <DeleteIcon />
              </div>
            )}
            <div
              className="cursor-pointer font-bold text-p3 underline"
              onClick={handleModalOpen}
            >
              중복확인
            </div>
            {/* 로그인 중복 여부에 따라 모달 다르게 보여주기 */}
            {/* 에러 문구 : 사용중인 닉네임 입니다. 추가하기 */}
            {open && (
              <Modal
                title="사용 가능한 닉네임입니다."
                showConfirmButton={true}
                onConfirm={onConfirm}
                confirmString="확인"
              />
            )}
          </div>
        </div>

        {errors.nickname ? (
          <p className="text-border-critical mb-3">{errors.nickname.message}</p>
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
  );
};

export default SignUpInfo;
