'use client';

import PaymentModal from '@/components/order/modal';
import Modal from '@/components/common/modal';
import { PaymentButtonProps } from '@/types/order/paymentButton/type';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedTermsState } from '@/atoms/order/termsAgreementAtom';
import { selectedPaymentMethodState } from '@/atoms/order/paymentMethodAtom';

const PaymentButton = ({ amount }: PaymentButtonProps) => {
  const selectedPaymentMethod = useRecoilValue(selectedPaymentMethodState);
  const selectedTerms = useRecoilValue(selectedTermsState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('orderConfirmation');

  const handleOpenModal = () => {
    if (!selectedPaymentMethod) {
      setModalType('paymentMethodFailure');
    } else if (selectedTerms.length !== 3) {
      setModalType('termsFailure');
    } else {
      setModalType('orderConfirmation');
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const formattedAmount = `${amount.toLocaleString('ko-KR')}원`;

  return (
    <>
      <div className="fixed bottom-0 bg-white border-t border-border-sub p-5 ml-[-1.25rem] h-17 w-full max-w-[480px] z-1 ">
        <button
          onClick={handleOpenModal}
          className="w-full bg-action-primary text-white font-semibold py-3 rounded leading-7"
        >
          {formattedAmount} 결제하기
        </button>
      </div>

      {modalType === 'orderConfirmation' && (
        <PaymentModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}

      {isModalOpen && modalType === 'paymentMethodFailure' && (
        <Modal
          title="결제 실패"
          content="주문내역과 결제수단을 확인해 주세요"
          onConfirm={handleCloseModal}
          confirmString="확인"
          showConfirmButton={true}
        />
      )}

      {isModalOpen && modalType === 'termsFailure' && (
        <Modal
          title="결제 실패"
          content="필수 이용 약관 동의가 필요합니다"
          onConfirm={handleCloseModal}
          confirmString="확인"
          showConfirmButton={true}
        />
      )}
    </>
  );
};
export default PaymentButton;
