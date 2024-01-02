'use client';

import Modal from '@/components/order/modal';
import { PaymentButtonProps } from '@/types/order/paymentButton/type';
import React, { useState } from 'react';

const PaymentButton = ({ amount }: PaymentButtonProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
    // 결제 완료 페이지로 이동 추가
  };

  const formattedAmount = `${amount.toLocaleString('ko-KR')}원`;

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-gray-1000 text-white font-bold py-3 px-4 mt-6"
      >
        {formattedAmount} 결제하기
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};
export default PaymentButton;
