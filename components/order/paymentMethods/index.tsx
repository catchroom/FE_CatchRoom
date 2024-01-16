'use client';

import React, { useState } from 'react';
import { Radio } from '@material-tailwind/react';

const PaymentMethods = () => {
  const [isEasyPaymentOpen, setIsEasyPaymentOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const toggleEasyPaymentDropdown = () => {
    setIsEasyPaymentOpen(!isEasyPaymentOpen);
    if (!isEasyPaymentOpen) {
      setSelectedPayment('easy');
    } else {
      setSelectedPayment('');
    }
  };

  const closeEasyPaymentDropdown = () => {
    setIsEasyPaymentOpen(false);
    setSelectedPayment('creditCard');
  };

  return (
    <>
      <div className="mx-[-20px]">
        <div className="w-full border-t-8 border-border-sub mb-6"></div>
      </div>
      <h5 className="mb-2 text-h5 font-semibold text-text-DEFAULT">
        결제 수단
      </h5>

      <div className="flex flex-row mt-3 items-start gap-2">
        <button
          onClick={toggleEasyPaymentDropdown}
          className={`flex-1 border bg-surface ${
            selectedPayment === 'easy'
              ? 'border-border-primary'
              : 'border-border-sub'
          } rounded focus:text-text-primary outline-none`}
        >
          <div className="p-4 leading-6">간편결제</div>
        </button>
        <button
          onClick={closeEasyPaymentDropdown}
          className={`flex-1 border bg-surface ${
            selectedPayment === 'creditCard'
              ? 'border-border-primary'
              : 'border-border-sub'
          } rounded focus:text-text-primary outline-none`}
        >
          <div className="p-4 leading-6">신용카드</div>
        </button>
      </div>

      {isEasyPaymentOpen && (
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <label
              htmlFor="kakaoPay"
              className="flex w-full cursor-pointer items-center  "
            >
              <Radio
                name="horizontal-list"
                id="kakaoPay"
                ripple={false}
                className="hover:before:opacity-0 before: border-icon-secondary "
                color="pink"
                containerProps={{
                  className: 'p-0 ',
                }}
                crossOrigin={undefined}
              />
              <div className="ml-3">카카오페이</div>
            </label>
            <label
              htmlFor="naverPay"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <Radio
                name="horizontal-list"
                id="naverPay"
                ripple={false}
                className="hover:before:opacity-0 before: border-icon-secondary"
                color="pink"
                containerProps={{
                  className: 'p-0',
                }}
                crossOrigin={undefined}
              />
              <div className="ml-3">네이버페이</div>
            </label>
            <label
              htmlFor="tossPay"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <Radio
                name="horizontal-list"
                id="tossPay"
                ripple={false}
                className="hover:before:opacity-0 before: border-icon-secondary"
                color="pink"
                containerProps={{
                  className: 'p-0',
                }}
                crossOrigin={undefined}
              />
              <div className="ml-3">토스페이</div>
            </label>
          </div>
          <div className="flex-col gap-2">
            <label
              htmlFor="payco"
              className="flex w-full cursor-pointer items-center  "
            >
              <Radio
                name="horizontal-list"
                id="payco"
                ripple={false}
                className="hover:before:opacity-0 before: border-icon-secondary"
                color="pink"
                containerProps={{
                  className: 'p-0',
                }}
                crossOrigin={undefined}
              />
              <div className="ml-3">페이코</div>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentMethods;
