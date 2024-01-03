'use client';

import React, { useState } from 'react';

const PaymentMethods = () => {
  const [isCreditCardOpen, setIsCreditCardOpen] = useState(false);
  const [isEasyPaymentOpen, setIsEasyPaymentOpen] = useState(false);

  const toggleCreditCardDropdown = () => setIsCreditCardOpen(!isCreditCardOpen);
  const toggleEasyPaymentDropdown = () =>
    setIsEasyPaymentOpen(!isEasyPaymentOpen);

  return (
    <div className="">
      <h3 className="mb-2 text-p2 font-bold text-gray-1000">결제 수단</h3>
      <button
        onClick={toggleCreditCardDropdown}
        className="w-full border border-gray-1000 text-left mt-2"
      >
        <div className="p-4 border-b">신용카드</div>
        {isCreditCardOpen && (
          <div className="border-t mt-2">{/* 신용카드 드롭다운 내용 */}</div>
        )}
      </button>
      <button
        onClick={toggleEasyPaymentDropdown}
        className="w-full border border-gray-1000 text-left mt-2"
      >
        <div className="p-4 border-b">간편결제 - 4종류</div>
        {isEasyPaymentOpen && (
          <div className="border-t mt-2">{/* 간편결제 드롭다운 내용 */}</div>
        )}
      </button>
    </div>
  );
};

export default PaymentMethods;
