'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const commonCheckStyle =
  "before:content[''] peer relative h-5 w-5 mr-2 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10";

const CheckboxContainer = () => {
  const { register, watch, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      allAgree: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    },
  });

  const checkbox1 = watch('checkbox1');
  const checkbox2 = watch('checkbox2');
  const checkbox3 = watch('checkbox3');

  const allChecked = checkbox1 && checkbox2 && checkbox3;

  const onSubmit = () => {
    console.log('clicked');
  };

  const handleAllCheck = () => {
    const checked = !getValues('allAgree');
    setValue('checkbox1', checked);
    setValue('checkbox2', checked);
    setValue('checkbox3', checked);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-4 "
    >
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          {...register('allAgree')}
          onClick={handleAllCheck}
          className={commonCheckStyle}
        />
        <span className="font-semibold ">전체동의</span>
      </label>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          {...register('checkbox1')}
          className={commonCheckStyle}
        />
        [필수] 개인정보 수집 및 이용
        <span className="text-text-primary absolute right-0">보기</span>
      </label>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          {...register('checkbox2')}
          className={commonCheckStyle}
        />
        [필수] 개인정보 제3자 정보
        <span className="text-text-primary absolute right-0">보기</span>
      </label>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          {...register('checkbox3')}
          className={commonCheckStyle}
        />
        [필수] 개인(신용)정보 처리
        <span className="text-text-primary absolute right-0">보기</span>
      </label>
      <button
        type="submit"
        disabled={!allChecked}
        className={`w-full px-4 rounded h-11 mt-5 cursor-pointer ${
          allChecked
            ? 'bg-action-primary text-white'
            : 'bg-action-secondary-disabled text-text-disabled'
        }`}
      >
        다음
      </button>
    </form>
  );
};

export default CheckboxContainer;
