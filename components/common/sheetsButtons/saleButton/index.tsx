'use client';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { MouseEventHandler, useState } from 'react';
import Modal from '../../modal';
import { useRouter } from 'next/navigation';
import nookies from 'nookies';

const SaleButton = ({
  name,
  fn,
  type = 'button',
}: {
  name: string;
  fn?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const accessToken = nookies.get(null)['accessToken'];
    if (accessToken === undefined) {
      setOpen(true);
    } else if (fn) fn(e);
  };

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  const onCancel = () => {
    handleModalOpen();
  };

  const onConfirm = () => {
    handleModalOpen();
    router.push('/login');
  };
  return (
    <>
      {open && (
        <Modal
          title="로그인 요청"
          content="로그인 후 숙박권을 등록할 수 있어요"
          showConfirmButton={true}
          showCancelButton={true}
          confirmString="로그인 하기"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}
      <Button
        placeholder="Button"
        onClick={handleBtnClick}
        type={type}
        className="flex gap-1 p-3 rounded-3xl font-pretend bg-main text-t2 font-bold text-white"
      >
        <Image src="/svg/plus.svg" width={24} height={24} alt="플러스 아이콘" />
        {name}
      </Button>
    </>
  );
};

export default SaleButton;
