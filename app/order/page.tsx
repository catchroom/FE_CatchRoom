import Header from '@/components/common/header';
import BookingHolderInfo from '@/components/order/bookingHolderInfo';
import CheckInOut from '@/components/order/checkInOut';
import GuestInfo from '@/components/order/guestInfo';
import ProductDetails from '@/components/order/productDetails';
import React from 'react';

const page = () => {
  const accommodationName = '제주신라호텔';
  const roomName = '스탠다드 더블';

  const checkInData = {
    date: '2023-12-08 (목)',
    time: '15:00',
  };
  const checkOutData = {
    date: '2023-12-09 (금)',
    time: '11:00',
  };

  return (
    <>
      <Header title="구매" showBackButton showBorder />
      <div className="flex flex-col container mx-auto px-3 py-6">
        <ProductDetails
          accommodationName={accommodationName}
          roomName={roomName}
        />
        <CheckInOut checkIn={checkInData} checkOut={checkOutData} />
        <BookingHolderInfo name="이름" phoneNumber="010-1234-5678" />
        <GuestInfo name="이름" phoneNumber="010-1234-5678" />
      </div>
    </>
  );
};

export default page;
