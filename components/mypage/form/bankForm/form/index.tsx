'use client';

import BottomSheets from '@/components/common/bottomSheets';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { BANK_LIST, INPUT_LIST } from '@/constants/mypage';
import { FormAccount, accountSchema } from '@/constants/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Radio } from '@material-tailwind/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const BankForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormAccount>({
    resolver: zodResolver(accountSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormAccount> = (data) => {
    if (accountSchema.safeParse(data)) {
      console.log(data);
    } else {
      console.log('error');
    }
  };

  const watchBank = watch('bank');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full gap-6"
    >
      <BottomSheets
        buttonSelect="input"
        title="은행명 선택"
        closeButton
        watchBank={watchBank}
      >
        <div className="w-full flex flex-col items-center gap-12">
          <div className="grid grid-cols-3 gap-5 max-h-96 overflow-y-scroll">
            {BANK_LIST.map((bank) => {
              return (
                <label
                  key={bank.value}
                  className="flex flex-col items-center justify-center"
                >
                  <p>{bank.name}</p>
                  <Radio
                    crossOrigin="anonymous"
                    type="radio"
                    color="pink"
                    key={bank.value}
                    value={bank.value}
                    {...register('bank')}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </BottomSheets>
      {INPUT_LIST.map((input) => (
        <div key={input.name} className="w-full flex flex-col relative">
          <input
            {...register(input.name as keyof FormAccount)}
            type="text"
            placeholder={input.placeholder}
            className="flex flex-start border-[1px] focus:outline-border-primary border-border-secondary text-t2 font-medium bg-transparent text-text p-4"
          />
          <p className="absolute py-1 bottom-0 translate-y-full text-p4 text-text-primary">
            {errors[input.name as keyof FormAccount]?.message}
          </p>
        </div>
      ))}
      <div className="w-full max-w-[480px] absolute bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton name="등록하기" type="submit" />
      </div>
    </form>
  );
};

export default BankForm;
