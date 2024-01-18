'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nameSchema, FormName } from '@/constants/zodSchema';
import { useDebounceText } from '@/hooks/useDebounceText';
import { ErrorMessage } from '@hookform/error-message';
import FormInput from '../formInput';
// import { useCheckNickname } from '@/api/user/query';
import { editProfile } from '@/api/mypage/api';
import { nicknameCheck } from '@/api/user/api';
import Modal from '@/components/common/modal';

const ProfileForm = ({ name }: { name: string }) => {
  // const mutation = useCheckNickname();
  const [checkNickname, setCheckNickname] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    // setValue,
    formState: { errors },
  } = useForm<FormName>({
    resolver: zodResolver(nameSchema),
    mode: 'onChange',
    delayError: 300,
    defaultValues: {
      nickname: name,
      //??이거 없애도 되는지 여쭤보기~,, 닉네임 겟해와서 이걸로 디폴트 해주는거아닌지
    },
  });

  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const inputText = watch('nickname');
  const debounceText = useDebounceText(inputText, 300);

  const onSubmit: SubmitHandler<FormName> = (data) => {
    if (nameSchema.safeParse(data).success) {
      // mutation.mutate(data.nickname);
      console.log(data);
      nicknameCheck(data.nickname).then((res) => {
        console.log(res);
        if (res.code === 1010) {
          editProfile(data.nickname).then((response) => {
            console.log(response);
            if (response.code === 2002) {
              setOpenSuccessAlert(true);
            } else if (res.code == 2003) {
              console.log('프로필 수정 실패');
            }
          });
        } else if (res.code == 1011) {
          setOpenErrorAlert(true);
        }
      });
    } else {
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
      {openErrorAlert && (
        <Modal
          title="중복된 닉네임입니다."
          showConfirmButton={true}
          onConfirm={() => {
            setOpenErrorAlert(false);
          }}
          confirmString="확인"
        />
      )}
      {openSuccessAlert && (
        <Modal
          title="정상적으로 변경됐어요"
          showConfirmButton={true}
          onConfirm={() => {
            setOpenSuccessAlert(false);
          }}
          confirmString="확인"
        />
      )}
    </form>
  );
};

export default ProfileForm;
