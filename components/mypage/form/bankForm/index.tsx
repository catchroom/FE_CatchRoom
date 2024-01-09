'use client';

import BottomSheets from '@/components/common/bottomSheets';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import {
  BANK_LIST,
  INVESTMENT_BANK_LIST,
  INPUT_LIST,
} from '@/constants/mypage';
import { FormAccount, accountSchema } from '@/constants/zodSchema';
import { getBankName } from '@/utils/get-bank-name';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const BankForm = () => {
  const [bankView] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  const enrollBank = (value: string) => {
    setValue('bank', value);
  };

  const BANK_VIEW = bankView ? BANK_LIST : INVESTMENT_BANK_LIST;
  const bankName = getBankName(bankView, watch('bank'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full gap-6"
    >
      <div className="w-full relative">
        <BottomSheets
          buttonSelect="input"
          title="은행명 선택"
          innerTitle="은행 또는 증권사를 선택해주세요"
          innerButtonTitle="선택"
          watchBank={bankName}
        >
          <div className="w-full">
            <div className="flex flex-col items-start max-h-[calc(100vh-200px)] overflow-y-scroll">
              {BANK_VIEW.map((bank) => {
                return (
                  <button
                    key={bank.name}
                    type="button"
                    onClick={() => enrollBank(bank.value)}
                    value={bank.value}
                    className="flex items-center w-full p-[10px] hover:text-text-primary"
                  >
                    {bank.name}
                  </button>
                );
              })}
            </div>
          </div>
        </BottomSheets>
        <p className="absolute py-1  translate-y-full bottom-0 text-p4 text-text-primary">
          {errors.bank?.message}
        </p>
      </div>
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
