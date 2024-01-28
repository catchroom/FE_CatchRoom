import { ReservationDetailProps } from '@/types/detail/types';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
import { roundToTenWon } from '@/utils/roundToTenWon';
import React from 'react';

const ReservationDetail = ({
  bookingHolder,
  guest,
  sellPrice,
  commission,
  totalPrice,
  paymentMethod,
  nickName,
}: ReservationDetailProps) => {
  return (
    <>
      <div className="flex flex-col container bg-white">
        <section className="flex flex-col gap-3 px-5 py-4 border-b border-gray-200">
          <h3 className="text-t2 font-bold text-text-DEFAULT ">예약자 정보</h3>
          <div className="flex justify-between items-center">
            <h3 className="text-t2 text-text-sub">이름</h3>
            <p className="text-t2 text-gray-1000">{bookingHolder.name}</p>
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="text-t2 text-text-sub">연락처</h3>
            <p className="text-t2 text-gray-1000">
              {formatPhoneNumber(bookingHolder.phoneNumber)}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-3 px-5 py-5 border-b border-gray-200">
          <h3 className="text-t2 font-bold text-text-DEFAULT ">이용자 정보</h3>
          <div className="flex justify-between items-center ">
            <h3 className="text-t2 text-text-sub">이름</h3>
            <p className="text-t2 ">{guest.name}</p>
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="text-t2 text-text-sub">연락처</h3>
            <p className="text-t2 ">{formatPhoneNumber(guest.phoneNumber)}</p>
          </div>
        </section>
        <section className="flex flex-col gap-4 px-5 py-5 mb-2">
          <h3 className="text-t2 font-bold text-text-DEFAULT ">결제 금액</h3>
          <div className="flex justify-between items-center ">
            <h3 className="text-t2 text-text-sub">상품 금액</h3>
            <p className="text-t2 ">
              {roundToTenWon(sellPrice)?.toLocaleString('ko-KR')}원
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-t2 text-text-sub">거래 수수료율 5%</h3>
            <p className="text-t2">
              {roundToTenWon(commission)?.toLocaleString('ko-KR')}원
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-t2 ">최종 결제 금액</h3>
            <p className="text-t2 font-bold">
              {roundToTenWon(totalPrice)?.toLocaleString('ko-KR')}원
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-t2 text-text-sub">결제 수단</h3>
            <p className="text-t2">{paymentMethod}</p>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-4 px-5 py-4 mb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-t2 text-text-sub">판매자</h3>
          <p className="text-t2">{nickName}</p>
        </div>
      </section>
    </>
  );
};

export default ReservationDetail;
