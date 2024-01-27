'use client';

import React, { useState } from 'react';
import Modal from '@/components/common/modal';
import { useRecoilValue } from 'recoil';
import { isWithDrawAtom } from '@/atoms/mypage/menuAtom';
import { useRouter } from 'next/navigation';

const AccountButton = ({
  text,
  location,
}: {
  text: string;
  location: string;
}) => {
  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);
  const withDrawValue = useRecoilValue(isWithDrawAtom);

  console.log(withDrawValue, '있냐?');
  console.log(location);

  const isWithDrawButton = text === '예치금 출금' ? true : false;

  const onClickRouting = (location: string) => {
    router.push(location);
  };

  const openModal = () => {
    if (isWithDrawButton && !withDrawValue) {
      return setOpenAlert(true);
    } else {
      return onClickRouting(location);
    }
  };

  const closeModal = () => {
    setOpenAlert(false);
  };

  const conConfirmClick = () => {
    setOpenAlert(false);
    onClickRouting('/mypage/dashboard/account');
  };

  return (
    <div className="w-1/2 flex justify-center text-p2 font-medium">
      <div className="text-p2" onClick={openModal}>
        {text}
      </div>
      {openAlert && (
        <Modal
          title="계좌를 등록해주세요"
          content="계좌 등록 후 출금이 가능합니다."
          showConfirmButton={true}
          showCancelButton={true}
          onConfirm={conConfirmClick}
          onCancel={closeModal}
          confirmString="등록"
          cancelString="취소"
        />
      )}
    </div>
  );
};

export default AccountButton;
