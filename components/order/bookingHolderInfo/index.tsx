import { BookingHolderInfoProps } from '@/types/order/bookingHolderInfo/types';
import React from 'react';
import InfoBox from '../infoBox';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

const BookingHolderInfo = ({ name, phoneNumber }: BookingHolderInfoProps) => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  return (
    <div className="flex flex-col mt-8 mb-6">
      <div className="mx-[-20px]">
        <div className="w-full border-t-8 border-border-sub mb-6"></div>
      </div>
      <span className="text-h5 font-semibold text-gray-1000 mb-3">
        예약자 정보
      </span>
      <div className="flex justify-start items-center mb-3 space-x-2">
        <span className="text-t2 text-text-sub">{name}</span>
        <span className="text-t2 text-text-sub">{formattedPhoneNumber}</span>
      </div>
      <div>
        <InfoBox messageKey="bookingHolderInfo" />
      </div>
    </div>
  );
};
export default BookingHolderInfo;
