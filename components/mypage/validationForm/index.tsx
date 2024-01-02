'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';

const ValidationForm = ({ name }: { name: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormName>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      nickname: name,
    },
  });

  console.log(nameSchema.safeParse(watch('nickname')).success);

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
              disabled={nameSchema.safeParse(watch('nickname')).success}
              className={`border-2 border-black border-opacity-30 text-black text-opacity-30 px-2`}
            >
              확인
            </button>
            <button
              type="button"
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
