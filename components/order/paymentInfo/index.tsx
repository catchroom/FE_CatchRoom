import { PaymentInfoProps } from '@/types/order/paymentInfo/types';
import { roundToTenWon } from '@/utils/roundToTenWon';
import React from 'react';

const PaymentInfo = ({ totalPrice, price, commission }: PaymentInfoProps) => {
  return (
    <>
      <div className="mx-[-20px]">
        <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
      </div>
      <div className="flex flex-col justify-between mb-6 gap-3">
        <h5 className="text-h5 font-semibold text-text-DEFAULT mb-2">
          결제 금액
        </h5>
        <div className="flex justify-between items-center">
          <span className="text-t2 text-text-DEFAULT leading-6">상품금액</span>
          <span className="text-t2 text-text-DEFAULT leading-6">
            {roundToTenWon(price)?.toLocaleString()}원
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-t2 text-gray-1000 leading-6">
            거래 수수료율 5%
          </span>
          <span className="text-t2 text-text-DEFAULT leading-6">
            {roundToTenWon(commission)?.toLocaleString()}원
          </span>
        </div>
        <div className="border-t-[1px] border-border-sub"></div>
        <div className="flex justify-between items-center">
          <span className="text-t2 text-gray-1000 leading-6">
            최종 결제 금액
          </span>
          <span className="text-text-DEFAULT font-semibold leading-7">
            {roundToTenWon(totalPrice)?.toLocaleString()}원
          </span>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
