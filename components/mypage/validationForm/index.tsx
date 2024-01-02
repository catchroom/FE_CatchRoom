'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';
import { useDebounceText } from '@/hooks/useDebounceText';
import MyPageCancelSVG from '@/public/svg/mypage-cancel';

const ValidationForm = ({ name }: { name: string }) => {
  const [checkNickname, setCheckNickname] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormName>({
    resolver: zodResolver(nameSchema),
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

  console.log(errors.nickname);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-12 flex flex-col"
    >
      <div className="w-full flex flex-row items-start  gap-3">
        <p className="mr-2 whitespace-nowrap">닉네임</p>
        <div className="flex flex-col gap-1 w-full relative">
          <input
            {...register('nickname')}
            type="text"
            className={`bg-white border-b-[1px] w-full outline-none border-black transition-colors duration-300 ease-in focus:border-main`}
          />
          <button
            type="button"
            onClick={() =>
              reset({
                nickname: '',
              })
            }
            className="absolute right-0 bg-white"
          >
            <MyPageCancelSVG />
            {''}
          </button>
          {errors.nickname && (
            <p className="text-red-500">{errors.nickname.message}</p>
          )}
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
              type="button"
              onClick={() => reset()}
              className={`${
                !!inputText && inputText !== name
                  ? 'border-opacity-100  text-opacity-100'
                  : 'border-opacity-30  text-opacity-30'
              } border-2 border-black text-black px-2`}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ValidationForm;
