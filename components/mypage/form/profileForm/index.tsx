'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';
import { useDebounceText } from '@/hooks/useDebounceText';
import MyPageCancelSVG from '@/public/svg/mypage-cancel';
import { ErrorMessage } from '@hookform/error-message';

const ProfileForm = ({ name }: { name: string }) => {
  const [checkNickname, setCheckNickname] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormName>({
    resolver: zodResolver(nameSchema),
    mode: 'onChange',
    delayError: 300,
    defaultValues: {
      nickname: name,
    },
  });

  const inputText = watch('nickname');
  const debounceText = useDebounceText(inputText, 300);

  const onSubmit: SubmitHandler<FormName> = (data) => {
    if (nameSchema.safeParse(data).success) {
      // api 요청
      console.log(data);
    } else {
      // error alert 처리
      console.log('error');
    }
  };

  useEffect(() => {
    const validName = () => {
      const notSameNickname = debounceText !== name;
      const availableNickname = nameSchema.safeParse({
        nickname: debounceText,
      }).success;

      if (notSameNickname && availableNickname) {
        setCheckNickname(true);
      } else {
        setCheckNickname(false);
      }
    };

    validName();
  }, [debounceText, name]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="w-full flex flex-col items-start  gap-3">
        <p className="whitespace-nowrap">닉네임</p>
        <div className="flex flex-col gap-1 w-full relative">
          <input
            {...register('nickname')}
            type="text"
            className={`bg-white border-b-[1px] w-full outline-none border-black transition-colors duration-300 ease-in focus:border-main`}
          />
          <button
            data-testid="cancel-button"
            type="button"
            onClick={() =>
              reset({
                nickname: '',
              })
            }
            className="absolute right-0 bg-white"
          >
            <MyPageCancelSVG />
          </button>
          <ErrorMessage
            errors={errors}
            name="nickname"
            render={({ message }) => (
              <p className="text-p4 text-pink-700">{message}</p>
            )}
          />
          <div className="w-full flex gap-3">
            <button
              type="submit"
              disabled={!checkNickname}
              className={`${
                checkNickname
                  ? 'border-opacity-100  text-opacity-100'
                  : 'border-opacity-30  text-opacity-30'
              } border-2 border-black text-black px-2`}
            >
              확인
            </button>
            <button
              data-testid="reset-button"
              type="button"
              onClick={() =>
                reset({
                  nickname: name,
                })
              }
              className="border-opacity-30 text-opacity-30 border-2 border-black text-black px-2 hover:border-opacity-70  hover:text-opacity-70"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
