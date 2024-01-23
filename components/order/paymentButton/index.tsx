'use client';

import PaymentModal from '@/components/order/modal';
import Modal from '@/components/common/modal';
import { PaymentButtonProps } from '@/types/order/paymentButton/type';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedTermsState } from '@/atoms/order/termsAgreementAtom';
import { selectedPaymentMethodState } from '@/atoms/order/paymentMethodAtom';
import { guestInfoState } from '@/atoms/order/guestInfoAtom';
// import { formSubmittedState } from '@/atoms/order/formSubmissionAtom';

const PaymentButton = ({ amount = 0, formRef }: PaymentButtonProps) => {
  const guestInfo = useRecoilValue(guestInfoState);
  const selectedPaymentMethod = useRecoilValue(selectedPaymentMethodState);
  const selectedTerms = useRecoilValue(selectedTermsState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('orderConfirmation');
  // const formSubmitted = useRecoilValue(formSubmittedState);

  const handleOpenModal = async () => {
    // if (formRef && formRef.current) {
    if (formRef.current) {
      const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      formRef.current.dispatchEvent(submitEvent);
    }
    // }

    console.log(guestInfo.name);
    if (!guestInfo.name || !guestInfo.phoneNumber) {
      setModalType('guestInfoFailure');
      setModalOpen(true);
    } else if (!selectedPaymentMethod) {
      setModalType('paymentMethodFailure');
      setModalOpen(true);
    } else if (selectedTerms.length !== 3) {
      setModalType('termsFailure');
      setModalOpen(true);
    }
  };
  // const handleOpenModal = async () => {
  //   if (formRef.current) {
  //     formRef.current.submit();
  //   }

  //   // 폼 제출 상태가 업데이트될 때까지 대기
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   if (formSubmitted && (!guestInfo.name || !guestInfo.phoneNumber)) {
  //     setModalType('guestInfoFailure');
  //     setModalOpen(true);
  //   } else if (!selectedPaymentMethod) {
  //     setModalType('paymentMethodFailure');
  //     setModalOpen(true);
  //   } else if (selectedTerms.length !== 3) {
  //     setModalType('termsFailure');
  //     setModalOpen(true);
  //   }
  // };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const formattedAmount = `${amount.toLocaleString('ko-KR')}원`;
  useEffect(() => {
    const handleGuestInfoUpdate = (e) => {
      console.log('Updated guest info:', e.detail);
      // 필요한 경우 여기서 추가적인 로직 수행
    };

    window.addEventListener('guestInfoUpdated', handleGuestInfoUpdate);

    return () => {
      window.removeEventListener('guestInfoUpdated', handleGuestInfoUpdate);
    };
  }, []);
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

      {isModalOpen && modalType === 'guestInfoFailure' && (
        <Modal
          title="결제 실패"
          content="이용자 정보를 모두 입력해주세요"
          onConfirm={handleCloseModal}
          confirmString="확인"
          showConfirmButton={true}
        />
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
