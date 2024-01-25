'use client';
import CheckInDateComponent from '@/components/common/checkInDateComponent';
import Header from '@/components/common/header';
import BookingHolderInfo from '@/components/order/bookingHolderInfo';
import GuestInfo from '@/components/order/guestInfo';
import PaymentButton from '@/components/order/paymentButton';
import PaymentInfo from '@/components/order/paymentInfo';
import PaymentMethods from '@/components/order/paymentMethods';
import ProductDetails from '@/components/order/productDetails';
import TermsAndConditions from '@/components/order/termsAndConditions';
import React, { useRef } from 'react';
import { useQueryGetOrderProduct } from '@/api/order/query';

const productId = 18;
const Page = () => {
  const { data, isLoading, error } = useQueryGetOrderProduct(productId);

  const guestInfoFormRef = useRef(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;
  const { accommodationName, productName, checkInDate, checkOutDate } =
    data.product;
  const { buyerName, buyerPhoneNumber } = data.buyer;
  const { sellPrice, commissionPrice, price } = data.payment;

  return (
    <>
      <Header title="구매하기" showBackButton showBorder />
      <div className="flex flex-col container mt-10 mx-auto w-full px-5 py-6">
        <ProductDetails
          accommodationName={productName}
          roomName={accommodationName}
        />
        <CheckInDateComponent
          CheckInDate={checkInDate}
          CheckOutDate={checkOutDate}
        />
        <BookingHolderInfo name={buyerName} phoneNumber={buyerPhoneNumber} />
        <GuestInfo
          ref={guestInfoFormRef}
          name={buyerName}
          phoneNumber={buyerPhoneNumber}
        />
        <PaymentInfo
          price={sellPrice}
          totalPrice={price}
          commission={commissionPrice}
        />
        <PaymentMethods />
        <TermsAndConditions />
        <PaymentButton formRef={guestInfoFormRef} amount={price} />
      </div>
    </>
  );
};

export default Page;
