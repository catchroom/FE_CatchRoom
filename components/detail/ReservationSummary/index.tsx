import React from 'react';
import Image from 'next/image';
import { CHECKIN_TIME, CHECKOUT_TIME } from '@/constants/CheckInOut';

const ReservationSummary = ({
  reservationNumber,
  accommodationName,
  roomName,
  normalCapacity,
  maxCapacity,
  imageUrl,
  transportation,
  checkIn,
  checkOut,
  sellPrice,
  // eslint-disable-next-line
}: any) => {
  const transportationLabels: { [key: string]: string } = {
    WALK: '도보 방문',
  };

  const transportationLabel = transportation
    ? transportationLabels[transportation] || '정보 없음'
    : '정보 없음';

  return (
    <div className="flex flex-col pb-5 border-b border-gray-200">
      <div className="flex flex-col gap-7">
        <h3 className="text-h5 font-bold text-text-DEFAULT ">
          상품 및 이용정보
        </h3>
        <section className="flex flex-col gap-1">
          <div className=" text-t3 text-text-sub">
            숙소 예약번호 {reservationNumber}
          </div>
          <h2 className="text-h5 font-bold text-text-DEFAULT">
            {accommodationName}
          </h2>

          <div className="flex gap-2 mb-1 ">
            <div className="w-16 h-16 relative">
              <Image
                src={imageUrl}
                alt={accommodationName}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>

            <div>
              <p className="text-t3 font-semibold text-text-DEFAULT">
                {roomName}
              </p>
              <p className=" text-t3 text-text-sub">{transportationLabel}</p>

              <p className="mt-2 text-t3 text-text-DEFAULT">
                {checkIn} (화) ~ {checkOut} (수) | 1박
              </p>
              <p className="mt-1 text-t3 text-text-sub">
                체크인 {CHECKIN_TIME} | 체크아웃 {CHECKOUT_TIME}
              </p>
              <p className="mt-1 text-t3 text-text-sub">
                기준 {normalCapacity}명 / 최대 {maxCapacity}명
              </p>
            </div>
          </div>

          <div className="flex gap-1 justify-end items-center">
            <p className="  text-t3 text-text-sub">숙박</p>
            <p className="  text-t2 text-text-default font-bold leading-5">
              {sellPrice.toLocaleString()}원
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReservationSummary;
