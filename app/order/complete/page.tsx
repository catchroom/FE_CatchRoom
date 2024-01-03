import CompleteMessage from '@/components/complete/completeMessage';
import ProductDetails from '@/components/complete/productDetails';
import ReservationInfo from '@/components/complete/reservationInfo';
import CheckInOut from '@/components/order/checkInOut';
import ActionButton from '@/components/order/modal/actionButton';
import Link from 'next/link';
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
      <div className="flex flex-col container mx-auto w-full px-5 pt-14 pb-11 bg-bg">
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
        <div className="flex flex-row justify-center items-stretch gap-6 mt-28">
          <Link href="/home">
            <ActionButton
              label="홈으로 이동"
              colorClass="bg-white text-black border border-black"
            />
          </Link>
          <Link href="/details" passHref>
            {/* 상세보기 url 확인 후 수정 필요 */}
            <ActionButton
              label="상세보기"
              colorClass="bg-gray-1000 text-white"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
