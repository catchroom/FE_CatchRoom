'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWithdraw, withdrawSchema } from '@/constants/zodSchema';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { ErrorMessage } from '@hookform/error-message';
import FormInput from '../formInput';
import FormError from '../formError';

const WithdrawForm = ({ originalBalance }: { originalBalance: number }) => {
  const schema = withdrawSchema(originalBalance);
  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  const balance = watch('balance');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="w-full flex flex-row items-start  gap-3">
        <div className="flex flex-col gap-2 w-full relative">
          <FormInput
            value="balance"
            register={register}
            reset={reset}
            won={true}
            inputOn={!!balance}
            placeholder="출금 금액을 입력해주세요."
          />
          <ErrorMessage
            errors={errors}
            name="balance"
            render={({ message }) => <FormError message={message} />}
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
