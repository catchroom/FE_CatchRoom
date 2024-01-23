'use client';

import React, { MouseEventHandler, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../modal';
import { useRecoilValue } from 'recoil';
import { priceState } from '@/atoms/sale/priceAtom';
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
  const allCheck = useRecoilValue(allCheckState);

  const [modalTitle, setModalTitle] = useState('');
  const [modalContent] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const handleValidation: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (price === 0) {
      //판매가 설정을 안했을 때
      setOpen(true);
      setModalTitle('판매가를 설정해주세요');
      return;
    }

    if (!allCheck) {
      setOpen(true);
      setModalTitle('이용 약관에 동의해주세요');
      return;
    }

    if (fn && allCheck && price !== 0) {
      fn(e);
      // postSaleProduct();
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
        data-testid="validationButton"
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
