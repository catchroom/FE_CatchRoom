import React from 'react';
import { CheckInComponentProps } from '@/types/common/checkInComponent/types';
import { CHECKIN_TIME, CHECKOUT_TIME } from '@/constants/CheckInOut';
import { ProductDetailsProps } from '@/types/order/productDetails/types';

type BookingDetailsProps = ProductDetailsProps & CheckInComponentProps;

const BookingDetails = ({
  accommodationName,
  roomName,
  CheckInDate,
  CheckOutDate,
}: BookingDetailsProps) => (
  <div className="mb-4">
    <p className="text-t2">{accommodationName}</p>
    <p className="text-t2">{roomName}</p>
    <div className="flex flex-col mt-9">
      <div className="flex justify-between mr-14">
        <p className="text-t2">체크인</p>
        <p className="font-bold">
          {CheckInDate} {CHECKIN_TIME}
        </p>
      </div>
      <div className="flex justify-between mr-14">
        <p className="text-t2">체크아웃</p>
        <p className="font-bold">
          {CheckOutDate} {CHECKOUT_TIME}
        </p>
      </div>
    </div>
  </div>
);

export default BookingDetails;
