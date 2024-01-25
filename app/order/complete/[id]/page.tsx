'use client';
import { useQueryGetOrderOrderComplete } from '@/api/order/query';
import CompleteMessage from '@/components/complete/completeMessage';
import NavButton from '@/components/complete/navButton';
import ProductDetails from '@/components/complete/productDetails';
import ReservationInfo from '@/components/complete/reservationInfo';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const params = useParams<{ id: string }>();
  const productId = params ? parseInt(params.id, 10) : 0;

  const { data, isLoading, error } = useQueryGetOrderOrderComplete(productId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;
  const { accommodationName, roomName, normalCapacity, maxCapacity, image } =
    data.accommodation;
  const { price } = data.sellPrice;
  const { nickName } = data.seller;

  const bookingDetails = {
    bookingHolder: {
      name: data?.buyer.buyerName,
      phoneNumber: data?.buyer.buyerPhoneNumber,
    },
    guest: {
      name: data?.user.userName,
      phoneNumber: data?.user.userPhoneNumber,
    },
  };

  return (
    <>
      <div className="flex flex-col container mx-auto w-full px-5 pt-16 pb-5  bg-bg">
        <div>
          <CompleteMessage guest={nickName} />
        </div>
        <div className="flex flex-col container p-5 bg-white">
          <ProductDetails
            accommodationName={accommodationName}
            roomName={roomName}
            normalCapacity={normalCapacity}
            maxCapacity={maxCapacity}
            imageUrl={image}
          />
          <ReservationInfo
            bookingHolder={bookingDetails.bookingHolder}
            guest={bookingDetails.guest}
            totalPrice={price}
            paymentMethod={data.paymentMethod}
          />
        </div>
        <div className="fixed flex gap-2 ml-[-1.25rem]  bottom-0 bg-white border-t border-border-sub p-5  h-17 w-full max-w-[480px] z-50">
          <div className="w-full h-full">
            <Link href="/home">
              <NavButton
                label="홈으로 이동"
                colorClass=" text-text-primary border border-border-primary"
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <Link href="/order/complete/detail">
              <NavButton
                label="상세보기"
                colorClass="bg-border-primary text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
