'use client';

import PaymentModal from '@/components/order/modal';
import Modal from '@/components/common/modal';
import { PaymentButtonProps } from '@/types/order/paymentButton/type';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedTermsState } from '@/atoms/order/termsAgreementAtom';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';

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
      <div className="cursor-pointer fixed bottom-0 w-full max-w-[480px] flex justify-center ">
        <div className="border-t border-border-sub bg-bg w-full p-5 -ml-[8rem]">
          <SimpleButton
            name={formattedAmount + ' 결제하기'}
            fn={handleSubmit}
            type="button"
          />
        </div>
      </div>

      {modalType === 'orderConfirmation' && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formRef={formRef}
        />
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
