import { FormAccount, FormName } from '@/constants/zodSchema';
import MyPageCancelSVG from '@/public/svg/mypage-cancel';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type resetType = {
  [key: string]: string;
};

const FormInput = ({
  value,
  placeholder,
  register,
  reset,
}: {
  value: keyof FormAccount | keyof FormName;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: (key: keyof (FormAccount | FormName)) => UseFormRegisterReturn;
  reset: (values?: resetType) => void;
}) => {
  const registerValue = value as keyof (FormAccount | FormName);
  return (
    <div className="flex flex-col gap-1 w-full relative items-center">
      <input
        {...register(registerValue)}
        type="text"
        placeholder={placeholder}
        className={`px-4 py-3 border border-border-sub rounded-md bg-surface w-full outline-none transition-colors duration-300 ease-in focus:border-border-critical`}
      />
      <button
        data-testid="cancel-button"
        type="button"
        onClick={() =>
          reset({
            [value]: '',
          })
        }
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <MyPageCancelSVG />
      </button>
    </div>
  );
};

export default FormInput;
