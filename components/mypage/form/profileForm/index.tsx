'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';
import { useDebounceText } from '@/hooks/useDebounceText';
import { ErrorMessage } from '@hookform/error-message';
import FormInput from '../formInput';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <div className="w-full flex flex-col items-start">
        <p className="whitespace-nowrap pb-1">닉네임</p>
        <div className="w-full flex flex-col">
          <FormInput
            register={register}
            value="nickname"
            placeholder="닉네임을 입력해주세요"
            reset={reset}
          />
          <ErrorMessage
            errors={errors}
            name="nickname"
            render={({ message }) => (
              <p className="pt-1 text-p2 text-text-critical">{message}</p>
            )}
          />
        </div>
        <div>
          <div className="w-full flex gap-1 pt-3 text-t3">
            <button
              type="submit"
              disabled={!checkNickname}
              className={`${
                checkNickname
                  ? 'bg-surface text-text-primary border-border-primary '
                  : 'bg-action-secondary-disabled bg-opacity-15 text-text-disabled border-action-secondary-disabled border-opacity-15'
              } px-4 py-2 rounded-md border box-border`}
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
              className="text-opacity-30 border border-action-secondary-disabled border-opacity-15 text-black px-4 py-2 rounded-md hover:bg-surface hover:text-text-primary hover:border-border-primary"
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
