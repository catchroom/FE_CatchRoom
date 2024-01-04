import { ReservationInfoProps } from '@/types/complete/types';
import React from 'react';

const ReservationInfo = ({
  bookingHolder,
  guest,
  totalPrice,
}: ReservationInfoProps) => {
  return (
    <div className="mt-8 text-center">
      <div className="mb-8">
        <h3 className="text-p2 font-bold text-gray-1000 mb-2">예약자 정보</h3>
        <div className="flex justify-center items-center space-x-2">
          <p className="text-p2 text-gray-1000">{bookingHolder.name}</p>
          <p className="text-p2 text-gray-1000">{bookingHolder.phoneNumber}</p>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-p2 font-bold text-gray-1000 mb-2">이용자 정보</h3>
        <div className="flex justify-center items-center space-x-2">
          <p className="text-p2 text-gray-1000">{guest.name}</p>
          <p className="text-p2 text-gray-1000">{guest.phoneNumber}</p>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-p2 font-bold text-gray-1000 mb-2">결제 정보</h3>
        <p className="text-p2 text-gray-1000">{totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ReservationInfo;
