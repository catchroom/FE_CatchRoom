import React from 'react';

type PaymentInfoProps = {
  totalPrice: number;
};
// 추가 후 위치 이동 예정

const PaymentInfo: React.FC<PaymentInfoProps> = ({ totalPrice }) => {
  return (
    <div className=" flex flex-col justify-between">
      <h3 className="text-p2 font-bold text-gray-900 mb-2">
        할인 및 결제 정보 + 수수료
      </h3>
      <div className="mb-2">
        <span className="text-p2 text-gray-1000">포인트</span>
      </div>
      <div className="mb-2">
        <span className="text-p2 text-gray-1000">상품권</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className=" text-p2 text-gray-1000">총 결제 금액</span>
        <span className="text-red-600 font-bold">
          {totalPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default PaymentInfo;
