'use client';

import PaymentModal from '@/components/order/modal';
import Modal from '@/components/common/modal';
import { PaymentButtonProps } from '@/types/order/paymentButton/type';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedTermsState } from '@/atoms/order/termsAgreementAtom';

const PaymentButton = ({ amount, formRef }: PaymentButtonProps) => {
  const selectedTerms = useRecoilValue(selectedTermsState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('orderConfirmation');

  const handleSubmit = () => {
    if (formRef.current) {
      const formValues = formRef.current.getValues();
      formRef.current.submitForm();
      if (!formValues.name || !formValues.phone) {
        setModalType('formValidationFailure');
        setModalOpen(true);
        return;
      }

      if (selectedTerms.length !== 3) {
        setModalType('termsFailure');
        setModalOpen(true);
        return;
      }

      setModalType('orderConfirmation');
      setModalOpen(true);
    } else {
      console.error('Form ref is not available');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const formattedAmount = `${amount.toLocaleString('ko-KR')}원`;

  return (
    <>
      <div className="fixed bottom-0 bg-white border-t border-border-sub p-5 ml-[-1.25rem] h-17 w-full max-w-[480px] z-1 ">
        <button
          onClick={handleSubmit}
          className="w-full bg-action-primary text-white font-semibold py-3 rounded leading-7"
        >
          {formattedAmount} 결제하기
        </button>
      </div>

      {modalType === 'orderConfirmation' && (
        <PaymentModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}

      {isModalOpen && modalType === 'formValidationFailure' && (
        <Modal
          title="결제 실패"
          content="이용자 정보를 모두 입력해주세요"
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
