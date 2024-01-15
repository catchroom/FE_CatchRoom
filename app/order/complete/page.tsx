import Header from '@/components/common/header';
import CompleteMessage from '@/components/complete/completeMessage';
import NavButton from '@/components/complete/navButton';
// import NavButton from '@/components/complete/navButton';
import ProductDetails from '@/components/complete/productDetails';
import ReservationInfo from '@/components/complete/reservationInfo';
import Link from 'next/link';
import React from 'react';

const page = () => {
  const accommodationName = '제주신라호텔';
  const roomName = '스탠다드 더블';
  const normalCapacity = 2;
  const maxCapacity = 4;
  const imageUrl = '/sample/room3.png';

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
    paymentMethod: '카드',
  };
  return (
    <>
      <Header title="구매하기" showCloseButton />
      <div className="flex flex-col container mx-auto w-full px-5 pt-14 pb-5  bg-bg">
        <div>
          <CompleteMessage />
        </div>
        <div className="flex flex-col container p-5 bg-white">
          <ProductDetails
            accommodationName={accommodationName}
            roomName={roomName}
            normalCapacity={normalCapacity}
            maxCapacity={maxCapacity}
            imageUrl={imageUrl}
          />
          <ReservationInfo
            bookingHolder={bookingDetails.bookingHolder}
            guest={bookingDetails.guest}
            totalPrice={bookingDetails.totalPrice}
            paymentMethod={bookingDetails.paymentMethod}
          />
        </div>
        <div className="fixed flex gap-2 ml-[-1.25rem]  bottom-0 bg-white border-t border-border-sub p-5  h-17 w-full max-w-[480px] z-50">
          <div className="w-full h-full">
            <Link href="/home">
              <NavButton
                label="홈으로 이동"
                colorClass=" text-text-primary border border-border-primary"
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <Link href="/order/complete/detail">
              <NavButton
                label="상세보기"
                colorClass="bg-border-primary text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
