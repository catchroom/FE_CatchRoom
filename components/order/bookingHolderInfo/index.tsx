import { BookingHolderInfoProps } from '@/types/order/bookingHolderInfo/types';
import React from 'react';

const BookingHolderInfo = ({ name, phoneNumber }: BookingHolderInfoProps) => {
  return (
    <div className="flex flex-col mt-8 mb-6">
      <span className="text-p2 font-bold text-gray-1000 mb-2">예약자 정보</span>
      <div className="flex justify-start items-center space-x-2">
        <span className="text-p2 text-gray-1000">{name}</span>
        <span className="text-p2 text-gray-1000">{phoneNumber}</span>
      </div>
    </div>
  );
};
export default BookingHolderInfo;
