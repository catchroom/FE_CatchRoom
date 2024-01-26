import React from 'react';
import { CheckInComponentProps } from '@/types/common/checkInComponent/types';
import { CHECKIN_TIME, CHECKOUT_TIME } from '@/constants/CheckInOut';
import { BasicProductDetailsProps } from '@/types/order/productDetails/types';
import calculateNightCount from '@/utils/calculateCount';
import { formatKoreanDate } from '@/utils/formatDate';

type BookingDetailsProps = BasicProductDetailsProps & CheckInComponentProps;

const BookingDetails = ({
  accommodationName,
  roomName,
  CheckInDate,
  CheckOutDate,
}: BookingDetailsProps) => {
  const nightCount = calculateNightCount(CheckInDate, CheckOutDate);

  return (
    <div className="mb-4">
      <p className="text-t2">{accommodationName}</p>
      <div className="flex flex-row">
        <p className="text-t2">{roomName}</p>
        <p className="text-t2"> / {nightCount}박</p>
      </div>
      <div className="flex flex-col mt-9">
        <div className="flex justify-between mr-14">
          <p className="text-t2">체크인</p>
          <p className="font-bold">
            {formatKoreanDate(CheckInDate)} {CHECKIN_TIME}
          </p>
        </div>
        <div className="flex justify-between mr-14">
          <p className="text-t2">체크아웃</p>
          <p className="font-bold">
            {formatKoreanDate(CheckOutDate)} {CHECKOUT_TIME}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
