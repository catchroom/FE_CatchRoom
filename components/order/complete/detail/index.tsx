'use client';

import React from 'react';
import ReservationSummary from '@/components/detail/ReservationSummary';
import ReservationDetail from '@/components/detail/ReservationDetail';
import { useQueryGetPurchaseDetail } from '@/api/mypage/query';
import { useRecoilValue } from 'recoil';
import { negoPriceSelector } from '@/atoms/chat/chatContentAtom';

const OrderDetail = ({ id }: { id: number }) => {
  const negoPrice = useRecoilValue(negoPriceSelector);
  const { data } = useQueryGetPurchaseDetail(id);
  console.log(data);
  const commission = data?.sellPrice.sellPrice * 0.05;
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
        sellPrice={negoPrice ? negoPrice.sellPrice : data?.sellPrice.sellPrice}
      />
      <ReservationDetail
        bookingHolder={bookingDetails.bookingHolder}
        guest={bookingDetails.guest}
        totalPrice={
          negoPrice && negoPrice.totalPrice !== 0
            ? negoPrice.totalPrice
            : data?.sellPrice.sellPrice + commission
        }
        paymentMethod={data?.paymentMethod}
        sellPrice={
          negoPrice && negoPrice.sellPrice !== 0
            ? negoPrice.sellPrice
            : data?.sellPrice.sellPrice
        }
        commission={
          negoPrice && negoPrice.commissionPrice !== 0
            ? negoPrice.commissionPrice
            : commission
        }
        nikName={data?.seller.nickName}
      />
    </>
  );
};

export default OrderDetail;
