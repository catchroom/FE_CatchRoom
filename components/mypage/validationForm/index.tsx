'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';

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

  useEffect(() => {
    const checkNickname = () => {
      const notSameNickname = inputText !== name;

      const availableNickname = nameSchema.safeParse({
        nickname: inputText,
      }).success;

      return notSameNickname && availableNickname;
    };

    if (checkNickname()) {
      console.log('available');
      setCheckNickname(true);
    } else {
      console.log('not available');
    }
  }, [inputText, name]);

  const onSubmit: SubmitHandler<FormName> = (data) => {
    if (nameSchema.safeParse(data).success) {
      console.log(data);
    } else {
      console.log('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-12 flex flex-col"
    >
      <div className="w-full flex flex-row items-start  gap-3">
        <p className="mr-2 whitespace-nowrap">닉네임</p>
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register('nickname')}
            type="text"
            className={`bg-white border-b-[1px] w-full outline-none border-black transition-colors duration-300 ease-in focus:border-main`}
          />
          {errors.nickname && (
            <p className="text-p4  text-pink-700">
              {'닉네임은 2~8자 한글/영문/숫자만 가능합니다.'}
            </p>
          )}

          <div className="w-full flex gap-3">
            <button
              type="submit"
              disabled={!checkNickname}
              // disabled={!checkNickname(inputText)}
              // className={`${
              //   checkNickname(inputText)
              //     ? 'border-opacity-100  text-opacity-100'
              //     : 'border-opacity-30  text-opacity-30'
              // } border-2 border-black text-black px-2`}
            >
              확인
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className={`border-2 border-black border-opacity-30 text-black text-opacity-30 px-2`}
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
