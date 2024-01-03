import { GuestInfoProps } from '@/types/order/guestInfo/types';
import React from 'react';

const GuestInfo = ({ name, phoneNumber }: GuestInfoProps) => {
  return (
    <div className="flex flex-col mb-8">
      <span className="text-p2 font-bold text-gray-1000 mb-2">이용자 정보</span>
      <div className="flex justify-start items-center space-x-2">
        <span className="text-p2 text-gray-1000">{name}</span>
        <span className="text-p2 text-gray-1000">{phoneNumber}</span>
      </div>
    </div>
  );
};

export default GuestInfo;
