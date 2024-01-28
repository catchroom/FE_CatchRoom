'use client';
import React from 'react';
import ActionButton from './actionButton';
import { ModalProps } from '@/types/order/modal/type';
import BookingDetails from './bookingDetails';
import Disclaimer from './disclaimer';
import { useQueryGetOrderProduct } from '@/api/order/query';
import { useParams } from 'next/navigation';
import { useMutationPostOrderInfo } from '@/api/order/query';
import { useRecoilValue } from 'recoil';
import {
  selectedPaymentMethodState,
  selectedEasyPaymentState,
} from '@/atoms/order/paymentMethodAtom';
import { useRouter } from 'next/navigation';
import { negoPriceSelector } from '@/atoms/chat/chatContentAtom';

const PaymentModal = ({ isOpen, onClose, formRef }: ModalProps) => {
  const router = useRouter();

  const negoInfo = useRecoilValue(negoPriceSelector);
  const selectedPayment = useRecoilValue(selectedPaymentMethodState);
  const selectedEasyPayment = useRecoilValue(selectedEasyPaymentState);
  const params = useParams<{ id: string }>();
  const productId = params ? parseInt(params.id, 10) : 0;

  const { data, isLoading, error } = useQueryGetOrderProduct(productId);

  const { mutate } = useMutationPostOrderInfo();
  if (!isOpen) return null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;
  const { accommodationName, productName, checkInDate, checkOutDate } =
    data.product;

  const finalizePaymentMethod = () => {
    if (selectedPayment === 'easy') {
      switch (selectedEasyPayment) {
        case 'kakaoPay':
          return '카카오페이';
        case 'naverPay':
          return '네이버페이';
        case 'tossPay':
          return '토스페이';
        case 'payco':
          return '페이코';
        default:
          return '간편결제';
      }
    } else if (selectedPayment === 'creditCard') {
      return '카드';
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMutationSuccess = (data: any) => {
    if (data.code === 2039) {
      console.log('Mutation 성공:');
      router.push(`/order/complete/${productId}`);
    } else if (data.code === 2042) {
      console.log('판매 중인 상품이 아닙니다.');
    } else console.log(data);
  };

  const handleMutationError = () => {
    console.error('Mutation 실패:');
  };

  const handlePayment = () => {
    if (formRef && formRef.current) {
      const guestInfoData = formRef.current.getValues();
      const paymentMethod = finalizePaymentMethod();
      const orderData = {
        productId,
        userInfo: {
          userName: guestInfoData.name,
          userPhoneNumber: guestInfoData.phone,
        },
        paymentInfo: {
          sellPrice: negoInfo ? negoInfo.sellPrice : data.payment.sellPrice,
          price: negoInfo ? negoInfo.totalPrice : data.payment.price,
        },
        paymentMethod: paymentMethod,
      };

      mutate(orderData, {
        onSuccess: handleMutationSuccess,
        onError: handleMutationError,
      });
    }
  };

  return (
    <div className="fixed z-20 inset-0  bg-gray-1000 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white w-auto max-w-[350px] m-auto rounded">
        <div className="p-5">
          <BookingDetails
            accommodationName={productName}
            roomName={accommodationName}
            CheckInDate={checkInDate}
            CheckOutDate={checkOutDate}
          />
          <Disclaimer />
          <div className="flex justify-center gap-2 mt-8 ml-2 mr-2">
            <ActionButton
              action={onClose}
              label="취소"
              colorClass=" text-text-primary border border-border-primary"
            />
            <ActionButton
              label="동의 후 결제"
              colorClass="bg-border-primary text-white"
              action={handlePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;
