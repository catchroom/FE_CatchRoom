'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nicknameSchema, FormName } from '@/constants/zodSchema';
import { useDebounceText } from '@/hooks/useDebounceText';
import { ErrorMessage } from '@hookform/error-message';
import FormInput from '../formInput';
import { editProfile, getUserProfile } from '@/api/mypage/api';
import { nicknameCheck } from '@/api/user/api';
import Modal from '@/components/common/modal';
import { useRouter } from 'next/navigation';

const ProfileForm = () => {
  const router = useRouter();
  const [checkNickname, setCheckNickname] = useState(false);
  const [nickname, setNickname] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormName>({
    resolver: zodResolver(nicknameSchema),
    mode: 'onChange',
    delayError: 300,
    defaultValues: {
      nickname: nickname,
    },
  });

  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const inputText = watch('nickname');
  const debounceText = useDebounceText(inputText, 300);

  const onSubmit: SubmitHandler<FormName> = (data) => {
    if (nicknameSchema.safeParse(data).success) {
      nicknameCheck(data.nickname).then((res) => {
        if (res.code === 1010) {
          editProfile(data.nickname).then((response) => {
            setNickname(response.data);
            if (response.code === 2002) {
              setOpenSuccessAlert(true);
              router.push('/mypage');
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
      const notSameNickname = debounceText !== nickname;
      const availableNickname = nicknameSchema.safeParse({
        nickname: debounceText,
      }).success;

      if (notSameNickname && availableNickname) {
        setCheckNickname(true);
      } else {
        setCheckNickname(false);
      }
    };

    validName();
  }, [debounceText, nickname]);

  useEffect(() => {
    getUserProfile().then((res) => {
      if (res.code === 2004) {
        console.log(res.data); //닉네임 가져온거 찍기
        reset({ nickname: res.data.nickName });
        setNickname(res.data.nickName);
      }
    });
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <div className="w-full flex flex-col items-start">
        <p className="whitespace-nowrap pb-1 text-t3 font-medium">닉네임</p>
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
                  nickname: nickname,
                })
              }
              className={`border border-action-secondary-disabled  text-black px-4 py-2 rounded-md ${
                debounceText !== nickname
                  ? 'text-text-primary border-border-primary'
                  : 'text-opacity-30 border-opacity-15'
              }`}
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
