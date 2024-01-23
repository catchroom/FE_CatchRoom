'use client';
import React, { useEffect, forwardRef, RefObject } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestInfoSchema } from '@/constants/zodSchema';
import CheckBoxComponent from '@/components/common/checkBox';
import DeleteIcon from '@/public/svgComponent/deleteIcon';
import { useRecoilState } from 'recoil';
import { guestInfoState } from '@/atoms/order/guestInfoAtom';
import { formSubmittedState } from '@/atoms/order/formSubmissionAtom';
type GuestInfoProps = {
  name: string;
  phoneNumber: string;
};

const GuestInfo = forwardRef<HTMLFormElement, GuestInfoProps>(
  ({ name: defaultName, phoneNumber: defaultPhoneNumber }, ref) => {
    // const formRef = useRef(null);
    const [, setGuestInfo] = useRecoilState(guestInfoState);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setFormSubmitted] = useRecoilState(formSubmittedState);

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(guestInfoSchema),
    });

    const clearInput = (fieldName: string) => {
      setValue(fieldName, '');
    };

    const isChecked = watch('sameAsReservation', false);

    const watchedName = watch('name');
    const watchedPhone = watch('phone');

    // eslint-disable-next-line
    // const onSubmit = (data: any) => {
    //   setGuestInfo(data);
    //   console.log(data);
    //   const isFormEmpty = !data.name && !data.phone;

    //   if (Object.keys(errors).length > 0 || isFormEmpty) {
    //     setIsModalOpen(true);
    //   } else {
    //     console.log('폼 제출 성공');
    //   }
    // };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
      setGuestInfo(data);
      setFormSubmitted(true);
      console.log('Form submitted with data:', data);
      const event = new CustomEvent('guestInfoUpdated', { detail: data });
      window.dispatchEvent(event);
    };

    useEffect(() => {
      if (isChecked) {
        setValue('name', defaultName);
        setValue('phone', defaultPhoneNumber);
      } else {
        setValue('name', '');
        setValue('phone', '');
      }
    }, [isChecked, setValue, defaultName, defaultPhoneNumber]);

    const handleSelectState = () => {
      setValue('sameAsReservation', !isChecked);
    };

    // let modalContent = '이용자 정보를 입력해주세요.';
    // if (errors.name && errors.phone) {
    //   modalContent = '이용자 정보를 모두 입력해주세요.';
    // } else if (errors.name) {
    //   modalContent = '이름을 입력해주세요.';
    // } else if (errors.phone) {
    //   modalContent = '휴대폰번호를 입력해주세요.';
    // }

    const baseInputStyle = `w-full rounded-md border border-border-sub focus:outline-none focus:border-border-primary caret-pink-500 text-text-DEFAULT px-4 py-2`;
    const inputWrapperStyle =
      'relative flex items-center border border-border-sub rounded-md';

    return (
      <div>
        <form
          ref={ref as RefObject<HTMLFormElement>}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mb-8"
        >
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
                  {/* {errors.name.message} */}
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
                  {/* {errors.phone.message} */}
                </p>
              )}
            </div>
          </div>
          {/* <button type="submit">제출</button> */}
        </form>
        {/* {isModalOpen && (
        <Modal
          title="입력 오류"
          content={modalContent}
          onConfirm={() => setIsModalOpen(false)}
          confirmString="확인"
          showConfirmButton={true}
        />
      )} */}
      </div>
    );
  },
);
GuestInfo.displayName = 'GuestInfo';
export default GuestInfo;
