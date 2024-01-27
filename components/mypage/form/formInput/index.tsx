import { FormAccount, FormName } from '@/constants/zodSchema';
import MyPageCancelSVG from '@/public/svg/mypage-cancel';
import WonIconSVG from '@/public/svgComponent/wonIcon';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type resetType = {
  [key: string]: string;
};

/**
 * @function FormInput - react-hook-form에서 사용하는 input 컴포넌트
 * @param {string} value - input의 name 값
 * @param {string} placeholder - input의 placeholder 값
 * @param {function} register - react-hook-form의 register 함수
 * @param {function} reset - react-hook-form의 reset 함수
 * @returns
 */

const FormInput = ({
  value,
  placeholder,
  register,
  reset,
  won = false,
  inputOn = false,
  isError = false,
}: {
  value: keyof FormAccount | keyof FormName | string;
  placeholder?: string;
  register: (key: keyof (FormAccount | FormName)) => UseFormRegisterReturn;
  reset: (values?: resetType) => void;
  won?: boolean;
  inputOn?: boolean;
  isError?: boolean;
}) => {
  const registerValue = value as keyof (FormAccount | FormName);

  const wonValue = won ? 'pl-9' : 'px-4';
  return (
    <div className="flex flex-col gap-1 w-full relative items-center">
      <input
        {...register(registerValue)}
        type="text"
        placeholder={placeholder}
        className={`${wonValue} py-3 border  rounded-md bg-surface w-full outline-none transition-colors duration-300 ease-in ${
          isError ? 'border-border-critical' : 'border-border-sub'
        } `}
      />
      {won && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <WonIconSVG on={inputOn} />
        </div>
      )}
      <button
        data-testid="cancel-button"
        type="button"
        onClick={() =>
          reset({
            [value]: '',
          })
        }
        className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in ${
          inputOn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <MyPageCancelSVG />
      </button>
    </div>
  );
};

export default FormInput;
