'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWithdraw, withdrawSchema } from '@/constants/zodSchema';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import MyPageCancelSVG from '@/public/svg/mypage-cancel';
import { ErrorMessage } from '@hookform/error-message';

const WithdrawForm = ({ originalBalance }: { originalBalance: number }) => {
  const schema = withdrawSchema(originalBalance);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormWithdraw>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormWithdraw> = (data) => {
    if (schema.safeParse(data)) {
      console.log(data);
    } else {
      console.log('error');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="w-full flex flex-row items-start  gap-3">
        <div className="flex flex-col gap-1 w-full relative">
          <input
            {...register('balance')}
            type="text"
            className={`bg-bg border-b-[1px] text-text-primary text-h2 w-full outline-none border-black transition-colors duration-300 ease-in focus:border-main`}
          />
          <button
            data-testid="cancel-button"
            type="button"
            onClick={() =>
              reset({
                balance: '',
              })
            }
            className="absolute right-0 bg-white"
          >
            <MyPageCancelSVG />
          </button>
          <ErrorMessage
            errors={errors}
            name="balance"
            render={({ message }) => (
              <p className="text-p1 text-pink-700">{message}</p>
            )}
          />
        </div>
      </div>
      <div className="w-full max-w-[480px] absolute bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton name="확인" type="submit" />
      </div>
    </form>
  );
};

export default WithdrawForm;
