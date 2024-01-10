'use client';
import CheckBoxComponent from '@/components/common/checkBox';
import { Checkbox, checkBoxSchema } from '@/constants/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const CheckboxContainer = () => {
  const { watch, handleSubmit, getValues, setValue } = useForm({
    resolver: zodResolver(checkBoxSchema),
    mode: 'onSubmit',
    defaultValues: {
      allAgree: false,
      check1: false,
      check2: false,
      check3: false,
    },
  });

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const check1 = watch('check1');
  const check2 = watch('check2');
  const check3 = watch('check3');

  const onSubmit: SubmitHandler<Checkbox> = (data) => {
    console.log(data);
    if (checkBoxSchema.safeParse(data).success) {
      // 모든 항목이 다 체크되어있는지 확인
      console.log('success');
    } else {
      console.log('error');
    }
  };

  const handleAllCheck = (
    e: React.MouseEvent,
    id: 'allAgree' | 'check1' | 'check2' | 'check3',
  ) => {
    e.stopPropagation();

    const checked = !getValues(id);
    setValue(id, checked);

    if (id === 'allAgree') {
      setValue('check1', checked);
      setValue('check2', checked);
      setValue('check3', checked);
    } else {
      const allAgreed =
        getValues('check1') && getValues('check2') && getValues('check3');

      setValue('allAgree', allAgreed);
    }
  };

  return (
    <form
      className="flex flex-col w-full gap-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="allAgree"
          labelText="전체동의"
          isBoxChecked={getValues('allAgree')}
          isLabelTextBold={true}
          handleSelectState={(e) => handleAllCheck(e, 'allAgree')}
        />
      </div>
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="check1"
          labelText="[필수] 개인정보 수집 및 이용"
          isBoxChecked={getValues('check1')}
          handleSelectState={(e) => handleAllCheck(e, 'check1')}
        />
        <Link
          href="/mypage/dashboard/terms"
          className="text-text-primary absolute right-0"
        >
          보기
        </Link>
      </div>
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="check2"
          labelText="[필수] 개인정보 제3자 정보"
          isBoxChecked={getValues('check2')}
          handleSelectState={(e) => handleAllCheck(e, 'check2')}
        />
        <Link
          href="/mypage/dashboard/terms"
          className="text-text-primary absolute right-0"
        >
          보기
        </Link>
      </div>
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="check3"
          labelText="[필수] 개인(신용)정보 처리"
          isBoxChecked={getValues('check3')}
          handleSelectState={(e) => handleAllCheck(e, 'check3')}
        />
        <Link
          href="/mypage/dashboard/terms"
          className="text-text-primary absolute right-0"
        >
          보기
        </Link>
      </div>
      <button
        type="submit"
        className="bg-action-primary text-white w-full px-4 rounded h-11 mt-5 cursor-pointer"
      >
        다음
      </button>
    </form>
  );
};

export default CheckboxContainer;
