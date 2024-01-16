import CheckInDateComponent from '@/components/common/checkInDateComponent';
import Header from '@/components/common/header';
import BookingHolderInfo from '@/components/order/bookingHolderInfo';
import GuestInfo from '@/components/order/guestInfo';
import PaymentButton from '@/components/order/paymentButton';
import PaymentInfo from '@/components/order/paymentInfo';
import PaymentMethods from '@/components/order/paymentMethods';
import ProductDetails from '@/components/order/productDetails';
import TermsAndConditions from '@/components/order/termsAndConditions';
import React from 'react';

const page = () => {
  const accommodationName = '제주신라호텔';
  const roomName = '스탠다드 더블';

  const price = 100000;
  const totalPrice = 135000;
  const commission = 9000;

  return (
    <>
      <Header title="구매하기" showBackButton showBorder />
      <div className="flex flex-col container mx-auto w-full px-5 py-6">
        <ProductDetails
          accommodationName={accommodationName}
          roomName={roomName}
        />
        <CheckInDateComponent
          checkInDate="2024-01-01 (월)"
          CheckInTime="15:00"
          CheckOutDate="2024-01-02 (화)"
          CheckOutTime="11:00"
        />
        <BookingHolderInfo name="홍길동" phoneNumber="010-1234-5678" />
        <GuestInfo name="홍길동" phoneNumber="01012345678" />
        <PaymentInfo
          price={price}
          totalPrice={totalPrice}
          commission={commission}
        />
        <PaymentMethods />
        <TermsAndConditions label="약관 동의" />
        <PaymentButton amount={totalPrice} />
      </div>
    </>
  );
};

export default page;
