'use client';

import React, { MouseEventHandler, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../modal';
import { useRecoilValue } from 'recoil';
import { priceState } from '@/atoms/sale/priceAtom';
import { catchPriceState, catchState } from '@/atoms/sale/catchAtom';
import { allCheckState } from '@/atoms/sale/checkAtom';

const ValidationButton = ({
  name,
  fn,
  disabled = false,
  type = 'button',
}: {
  name: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fn?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const disabledStyle = disabled
    ? 'bg-action-secondary-disabled text-text-disabled'
    : 'bg-action-primary text-text-on';

  const price = useRecoilValue(priceState);
  const isCatch = useRecoilValue(catchState);
  const catchPrice = useRecoilValue(catchPriceState);
  const allCheck = useRecoilValue(allCheckState);

  const [modalTitle, setModalTitle] = useState('');
  const [modalContent] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const handleValidation: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (price === 0) {
      //판매가 설정을 안했을 때
      setOpen(true);
      setModalTitle('판매가를 설정해주세요');
    }

    if (isCatch) {
      //캐치특가 설정 On 하고
      if (catchPrice == 0) {
        //캐치특가 판매가 설정 안했을 때
        setOpen(true);
        setModalTitle('캐치특가 자동 설정\n 옵션을 선택해주세요');
      }
      //캐치특가 날짜 적용안했을 때 추가 예정
    }

    if (!allCheck) {
      setOpen(true);
      setModalTitle('이용 약관에 동의해주세요');
    }

    if (fn && allCheck && price !== 0) {
      if (isCatch && catchPrice !== 0) fn(e);
      else if (!isCatch) fn(e);
    }
  };

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };
  const onConfirm = () => {
    handleModalOpen();
  };

  return (
    <>
      {open && (
        <Modal
          title={modalTitle}
          content={modalContent}
          showConfirmButton={true}
          showCancelButton={false}
          onConfirm={onConfirm}
          confirmString="확인"
        />
      )}
      <motion.button
        whileTap={{ scale: 0.97 }}
        data-testid="sampleButton"
        onClick={handleValidation}
        disabled={disabled}
        type={type}
        className={`${disabledStyle} w-full text-t2 font-medium p-4 py-2.5 rounded-md transition-colors duration-300 ease-in`}
      >
        {name}
      </motion.button>
    </>
  );
};

export default ValidationButton;
