import Header from '@/components/common/header';
import React from 'react';
import ReservationSummary from '@/components/detail/ReservationSummary';
import ReservationDetail from '@/components/detail/ReservationDetail';
import InfoBox from '@/components/order/infoBox';

const page = () => {
  const reservationNumber = 12345678765454;
  const accommodationName = '제주신라호텔';
  const roomName = '스탠다드 더블';
  const normalCapacity = 2;
  const maxCapacity = 4;
  const imageUrl = '/sample/room3.png';
  const transportation = 'WALK';
  const checkIn = '2024.01.02';
  const checkOut = '2024.01.03';
  const sellPrice = 98000;
  const commission = 9000;
  const nikName = '닉네임닉네임12';
  const bookingDetails = {
    bookingHolder: {
      name: '홍길동',
      phoneNumber: '010-1234-5678',
    },
    guest: {
      name: '홍길동',
      phoneNumber: '010-1234-5678',
    },
    totalPrice: 109000,
    paymentMethod: '카드',
  };
  return (
    <>
      <Header
        title="상세보기"
        showCloseButton
        showBorder
        closeButtonRedirectPath="/mypage/dashboard/purchase"
      />
      <div className="flex flex-col container mx-auto w-full px-5 pt-4 pb-[6.5rem] mt-14 bg-bg">
        <ReservationSummary
          reservationNumber={reservationNumber}
          accommodationName={accommodationName}
          roomName={roomName}
          normalCapacity={normalCapacity}
          maxCapacity={maxCapacity}
          imageUrl={imageUrl}
          transportation={transportation}
          checkIn={checkIn}
          checkOut={checkOut}
          sellPrice={sellPrice}
        />
        <ReservationDetail
          bookingHolder={bookingDetails.bookingHolder}
          guest={bookingDetails.guest}
          totalPrice={bookingDetails.totalPrice}
          paymentMethod={bookingDetails.paymentMethod}
          sellPrice={sellPrice}
          commission={commission}
          nikName={nikName}
        />
        <InfoBox messageKey={'refundInfo'} />
      </div>
    </>
  );
};

export default page;
