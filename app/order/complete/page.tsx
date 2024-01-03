import CompleteMessage from '@/components/complete/completeMessage';
import ProductDetails from '@/components/complete/productDetails';
import ReservationInfo from '@/components/complete/reservationInfo';
import CheckInOut from '@/components/order/checkInOut';
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

  const bookingDetails = {
    bookingHolder: {
      name: '이름',
      phoneNumber: '010-1234-5678',
    },
    guest: {
      name: '이름',
      phoneNumber: '010-1234-5678',
    },
    totalPrice: 200000,
  };
  return (
    <>
      <div className="flex flex-col container mx-auto w-full px-5 py-6">
        <CompleteMessage />
        <ProductDetails
          accommodationName={accommodationName}
          roomName={roomName}
        />
        <CheckInOut checkIn={checkInData} checkOut={checkOutData} />
        <ReservationInfo
          bookingHolder={bookingDetails.bookingHolder}
          guest={bookingDetails.guest}
          totalPrice={bookingDetails.totalPrice}
        />
      </div>
    </>
  );
};

export default page;
