import Header from '@/components/common/header';
import React from 'react';
import ReservationSummary from '@/components/detail/ReservationSummary';

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

  return (
    <>
      <Header title="상세보기" showCloseButton showBorder />
      <div className="flex flex-col container p-5 bg-white">
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
      </div>
    </>
  );
};

export default page;
