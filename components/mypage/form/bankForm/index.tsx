'use client';

import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import BottomSheets from '@/components/common/bottomSheets';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { BANK_LIST, INVESTMENT_BANK_LIST } from '@/constants/mypage';
import { FormAccount, accountSchema } from '@/constants/zodSchema';
import { getBankName } from '@/utils/get-bank-name';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import DivideWrapper from '../../divideWrapper';
import { divideAtom } from '@/atoms/mypage/divideAtom';
import FormInput from '../formInput';
import { ErrorMessage } from '@hookform/error-message';
import FormError from '../formError';
import { useToastAlert } from '@/hooks/useToastAlert';
import { useRouter } from 'next/navigation';
import { registerAccount } from '@/api/mypage/api';
import { useQueryGetAccount } from '@/api/mypage/query';
import { editAccount } from './../../../../api/mypage/api';

const BankForm = () => {
  const { alertOpenHandler } = useToastAlert('계좌를 등록했습니다.');
  const bankView = useRecoilValue(divideAtom);
  const router = useRouter();
  const setBankModal = useSetRecoilState(outerBottomSheetsControl);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormAccount>({
    resolver: zodResolver(accountSchema),
    mode: 'onChange',
  });
  const { data } = useQueryGetAccount();
  //console.log(data);

  const checkInput = () => {
    const { bank, account, name } = watch();
    if (bank && account && name) {
      return true;
    }
    return false;
  };

  const onSubmit: SubmitHandler<FormAccount> = (dataField) => {
    if (accountSchema.safeParse(dataField)) {
      console.log(dataField);
      if (!data) {
        registerAccount(dataField.bank, dataField.account, dataField.name).then(
          (res) => {
            if (res.code === 2006) {
              console.log(res.data);
            }
          },
        );
      } else if (data) {
        editAccount(dataField.bank, dataField.account, dataField.name).then(
          (res) => {
            if (res.code === 2010) {
              console.log(res.data);
            }
          },
        );
      }
    } else {
      console.log('error');
    }
  };

  const disabledButton = () => {
    if (errors.bank || errors.account || errors.name || !checkInput()) {
      return true;
    }
    return false;
  };

  const enrollBank = (value: string) => {
    setBankModal(false);
    setValue('bank', value);
  };

  const BANK_VIEW = bankView ? BANK_LIST : INVESTMENT_BANK_LIST;
  const bankName = getBankName(bankView, watch('bank'));
  const BottomSheetsTitle = !data
    ? '은행 또는 증권사를 선택해주세요'
    : bankName
      ? bankName
      : data.bankName;
  //이 부분 추가 수정

  const handleBankClick = () => {
    alertOpenHandler();
    router.push('/mypage');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full gap-6 py-5"
    >
      <div className="w-full relative">
        <BottomSheets
          buttonSelect="input"
          title={BottomSheetsTitle}
          innerTitle="은행/증권사 선택"
          innerButtonTitle="선택"
          outerControl={true}
        >
          <div className="w-full">
            <div className="flex flex-col items-start overflow-y-scroll">
              <DivideWrapper maxHeightControl={false} divideCase="BANK">
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
              </DivideWrapper>
            </div>
          </div>
        </BottomSheets>
        <ErrorMessage
          errors={errors}
          name="bank"
          render={({ message }) => <FormError message={message} />}
        />
      </div>
      <div className="w-full flex flex-col relative">
        <FormInput
          value="account"
          register={register}
          reset={reset}
          placeholder={data ? data.accountNumber : '계좌번호 입력'}
        />
        <ErrorMessage
          errors={errors}
          name="account"
          render={({ message }) => <FormError message={message} />}
        />
      </div>
      <div className="w-full flex flex-col relative">
        <FormInput
          value="name"
          register={register}
          reset={reset}
          placeholder={data ? `${data.accountOwner}` : '예금주명'}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <FormError message={message} />}
        />
      </div>

      <div className="w-full max-w-[480px] absolute bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton
          fn={handleBankClick}
          disabled={disabledButton()}
          name="확인"
          type="submit"
        />
      </div>
    </form>
  );
};

export default BankForm;
