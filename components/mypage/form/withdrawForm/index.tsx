'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWithdraw, withdrawSchema } from '@/constants/zodSchema';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { ErrorMessage } from '@hookform/error-message';
import Modal from '@/components/common/modal';
import FormInput from '../formInput';
import FormError from '../formError';
import { useRouter } from 'next/navigation';
import { useToastAlert } from '@/hooks/useToastAlert';

const WithdrawForm = ({ originalBalance }: { originalBalance: number }) => {
  const { alertOpenHandler } = useToastAlert('출금이 완료되었습니다.');
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const schema = withdrawSchema(originalBalance);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormWithdraw>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    router.push('/mypage');
    setModal(false);
  };

  const onSubmit: SubmitHandler<FormWithdraw> = (data) => {
    if (schema.safeParse(data)) {
      openModal();
    } else {
      console.log('error');
    }
  };

  const balance = watch('balance');

  const disabledButton = () => {
    if (errors.balance || !balance) {
      return true;
    }
    return false;
  };

  const handleClick = () => {
    alertOpenHandler();
  };

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
          {!errors.balance && (
            <p className=" text-t3 text-text-sub">
              출금 가능 금액 : {originalBalance.toLocaleString()}원
            </p>
          )}
        </div>
      </div>
      <div className="w-full max-w-[480px] absolute bottom-5 left-1/2 -translate-x-1/2 px-5">
        <SimpleButton
          fn={handleClick}
          disabled={disabledButton()}
          name="출금하기"
          type="submit"
        />
      </div>
      {/* 모달 띄우기 */}
      {modal && (
        <Modal
          title="출금이 정상적으로 처리되었어요"
          confirmString="마이페이지로 이동"
          showConfirmButton={true}
          onConfirm={closeModal}
        />
      )}
    </form>
  );
};

export default WithdrawForm;
