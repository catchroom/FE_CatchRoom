'use client';
import React, { forwardRef, useImperativeHandle, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestInfoSchema } from '@/constants/zodSchema';
import CheckBoxComponent from '@/components/common/checkBox';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import {
  GuestInfoFormData,
  GuestInfoProps,
} from '@/types/order/guestInfo/types';

const GuestInfo = forwardRef(
  (
    { name: defaultName, phoneNumber: defaultPhoneNumber }: GuestInfoProps,
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(onSubmit)(),
      getValues,
    }));

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      clearErrors,
      getValues,

      formState: { errors },
    } = useForm<GuestInfoFormData>({
      resolver: zodResolver(guestInfoSchema),
      mode: 'onBlur',
    });

    const clearInput = (fieldName: 'name' | 'phone') => {
      setValue(fieldName, '');
      setValue('sameAsReservation', false);
    };

    const isChecked = watch('sameAsReservation', false);

    const watchedName = watch('name');
    const watchedPhone = watch('phone');

    const onSubmit = (data: GuestInfoFormData) => {
      console.log(data);
    };

    useEffect(() => {
      if (isChecked) {
        setValue('name', defaultName);
        setValue('phone', defaultPhoneNumber);
        clearErrors(['name', 'phone']);
      } else {
        setValue('name', '');
        setValue('phone', '');
      }
    }, [isChecked, setValue, defaultName, defaultPhoneNumber, clearErrors]);

    const handleSelectState = () => {
      setValue('sameAsReservation', !isChecked);
    };
    const baseInputStyle = `w-full rounded-md border border-border-sub focus:outline-none focus:border-border-primary caret-pink-500 text-text-DEFAULT px-4 py-2`;
    const inputWrapperStyle =
      'relative flex items-center border border-border-sub rounded-md';

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-8">
          <div className="mx-[-20px]">
            <div className="w-full border-t-8 border-border-sub mb-6"></div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-h5 font-semibold text-gray-1000 mb-3">
              이용자 정보
            </span>
            <CheckBoxComponent
              id="sameAsReservation"
              labelText="예약자 정보와 동일합니다"
              isBoxChecked={isChecked}
              handleSelectState={handleSelectState}
            />
            <div className="flex flex-col gap-3 justify-start">
              <div className={inputWrapperStyle}>
                <input
                  {...register('name', { required: true })}
                  placeholder="이용자 성명"
                  className={`${baseInputStyle} ${
                    errors.name && !watchedName ? 'border-border-critical' : ''
                  }`}
                  disabled={isChecked}
                />
                {watchedName && (
                  <div
                    onClick={() => clearInput('name')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <DeleteIcon />
                  </div>
                )}
              </div>
              {errors.name && watchedName && (
                <p className="border-border-critical text-text-sub text-p3">
                  {typeof errors.name.message === 'string'
                    ? errors.name.message
                    : ''}
                </p>
              )}
              <div className={inputWrapperStyle}>
                <input
                  {...register('phone', { required: true })}
                  placeholder="휴대폰 번호"
                  className={`${baseInputStyle} ${
                    errors.phone && !watchedPhone
                      ? 'border-border-critical'
                      : ''
                  }`}
                  disabled={isChecked}
                />
                {watchedPhone && (
                  <div
                    onClick={() => clearInput('phone')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <DeleteIcon />
                  </div>
                )}
              </div>
              {errors.phone && watchedPhone && (
                <p className="border-border-critical text-text-sub text-p3">
                  {typeof errors.phone.message === 'string'
                    ? errors.phone.message
                    : ''}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  },
);
GuestInfo.displayName = 'GuestInfo';

export default GuestInfo;
