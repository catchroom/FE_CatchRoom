'use client';

import React from 'react';
import ReservationSummary from '@/components/detail/ReservationSummary';
import ReservationDetail from '@/components/detail/ReservationDetail';
import { useQueryGetPurchaseDetail } from '@/api/mypage/query';

const OrderDetail = ({ id }: { id: number }) => {
  const { data } = useQueryGetPurchaseDetail(id);

  const commission = data?.sellPrice.price * 0.05;
  const bookingDetails = {
    bookingHolder: {
      name: data?.buyer.buyerName,
      phoneNumber: data?.buyer.buyerPhoneNumber,
    },
    guest: {
      name: data?.user.userName,
      phoneNumber: data?.user.userPhoneNumber,
    },
  };

  return (
    <>
      <ReservationSummary
        reservationNumber={data?.accommodation.reservationNumber}
        accommodationName={data?.accommodation.accommodationName}
        roomName={data?.accommodation.roomName}
        normalCapacity={data?.accommodation.normalCapacity}
        maxCapacity={data?.accommodation.maxCapacity}
        imageUrl={data?.accommodation.image}
        transportation={data?.accommodation.transportation}
        checkIn={data?.accommodation.checkIn}
        checkOut={data?.accommodation.checkOut}
        sellPrice={data?.sellPrice.sellPrice}
      />
      <ReservationDetail
        bookingHolder={bookingDetails.bookingHolder}
        guest={bookingDetails.guest}
        totalPrice={data?.sellPrice.price + commission}
        paymentMethod={data?.paymentMethod}
        sellPrice={data?.sellPrice.price}
        commission={commission}
        nikName={data?.seller.nickName}
      />
    </>
  );
};

export default OrderDetail;
