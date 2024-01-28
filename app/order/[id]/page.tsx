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
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { negoPriceSelector } from '@/atoms/chat/chatContentAtom';
import OrderSkeletonUI from '@/components/order/orderSkeletonUI';
// const productId = 18;
const Page = () => {
  const params = useParams<{ id: string }>();
  const productId = params ? parseInt(params.id, 10) : 0;
  const priceData = useRecoilValue(negoPriceSelector);

  const { data, isLoading, error } = useQueryGetOrderProduct(productId);

  const guestInfoFormRef = useRef(null);

  if (isLoading) return <OrderSkeletonUI />;
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
          price={
            priceData && priceData.sellPrice !== 0
              ? priceData.sellPrice
              : sellPrice
          }
          totalPrice={
            priceData && priceData.sellPrice !== 0
              ? priceData.totalPrice
              : price
          }
          commission={
            priceData && priceData.sellPrice !== 0
              ? priceData.commissionPrice
              : commissionPrice
          }
        />
        <PaymentMethods />
        <TermsAndConditions />
        <PaymentButton
          formRef={guestInfoFormRef}
          amount={
            priceData && priceData.sellPrice !== 0
              ? priceData.totalPrice
              : price
          }
        />
      </div>
    </>
  );
};

export default Page;
