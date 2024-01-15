import { ReservationInfoProps } from '@/types/complete/types';
import React from 'react';

const ReservationInfo = ({
  bookingHolder,
  guest,
  totalPrice,
  paymentMethod,
}: ReservationInfoProps) => {
  return (
    <>
      <section className="flex flex-col gap-2 px-5 py-5 border-b border-gray-200">
        <h3 className="text-h5 font-bold text-text-DEFAULT ">예약자 정보</h3>
        <div className="flex justify-between items-center">
          <h3 className="text-t2 text-text-sub">이름</h3>
          <p className="text-t2 text-gray-1000">{bookingHolder.name}</p>
        </div>
        <div className="flex justify-between items-center ">
          <h3 className="text-t2 text-text-sub">연락처</h3>
          <p className="text-t2 text-text-sub">{bookingHolder.phoneNumber}</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 px-5 py-5 border-b border-gray-200">
        <h3 className="text-h5 font-bold text-text-DEFAULT ">이용자 정보</h3>
        <div className="flex justify-between items-center ">
          <h3 className="text-t2 text-text-sub">이름</h3>
          <p className="text-t2 text-text-sub">{guest.name}</p>
        </div>
        <div className="flex justify-between items-center ">
          <h3 className="text-t2 text-text-sub">연락처</h3>
          <p className="text-t2 text-text-sub">{guest.phoneNumber}</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 px-5 py-5 mb-20">
        <h3 className="text-h5 font-bold text-text-DEFAULT ">결제 정보</h3>
        <div className="flex justify-between items-center ">
          <h3 className="text-t2 text-text-sub">결제 금액</h3>
          <p className="text-t2 text-text-sub">{totalPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-t2 text-text-sub">결제 수단</h3>
          <p className="text-t2 text-text-sub">{paymentMethod}</p>
        </div>
      </section>
    </>
  );
};

export default ReservationInfo;
