import Header from '@/components/common/header';
import ProductDetails from '@/components/order/productDetails';
import React from 'react';

const page = () => {
  const accommodationName = '제주신라호텔';
  const roomName = '스탠다드 더블';

  return (
    <>
      <Header title="구매" showBackButton showBorder />
      <div className="flex flex-col container mx-auto px-3 py-6">
        <ProductDetails
          accommodationName={accommodationName}
          roomName={roomName}
        />
      </div>
    </>
  );
};

export default page;
