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
      <div className="fixed bottom-0 bg-white border-t border-border-sub p-5 ml-[-1.25rem] h-17 w-full max-w-[480px] z-50">
        <button
          onClick={handleOpenModal}
          className="w-full bg-action-primary text-white font-semibold py-3 rounded leading-7"
        >
          {formattedAmount} 결제하기
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};
export default PaymentButton;
