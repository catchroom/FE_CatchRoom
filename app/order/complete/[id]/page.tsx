'use client';
import { useQueryGetOrderOrderComplete } from '@/api/order/query';
import { negoPriceSelector } from '@/atoms/chat/chatContentAtom';
import CompleteMessage from '@/components/complete/completeMessage';
import CompleteSkeletonUI from '@/components/complete/completeSkeletonUI';
import NavButton from '@/components/complete/navButton';
import ProductDetails from '@/components/complete/productDetails';
import ReservationInfo from '@/components/complete/reservationInfo';
import { UseParamsType } from '@/types/room-info/types';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Page = () => {
  const negoPrice = useRecoilValue(negoPriceSelector);
  const params = useParams<{ id: string }>();
  const { id } = useParams() as UseParamsType;
  const productId = params ? parseInt(params.id, 10) : 0;
  const router = useRouter();
  const { data, isLoading, error } = useQueryGetOrderOrderComplete(productId);

  if (isLoading) return <CompleteSkeletonUI />;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;
  const { accommodationName, roomName, normalCapacity, maxCapacity, image } =
    data.accommodation;
  const { sellPrice } = data.sellPrice;
  const { buyerNickname } = data.buyer;
  const commission = data?.sellPrice.sellPrice * 0.05;
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
  const handleViewDetailClick = () => {
    router.push(`/order/complete/detail?id=${id}`);
  };

  return (
    <>
      <div className="flex flex-col container mx-auto w-full px-5 pt-16   bg-bg">
        <div>
          <CompleteMessage nickName={buyerNickname} />
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
            totalPrice={
              negoPrice ? negoPrice.totalPrice : sellPrice + commission
            }
            paymentMethod={data.paymentMethod}
          />
        </div>
        <div className="fixed flex gap-2 left-1/2 -translate-x-1/2  bottom-0 bg-white border-t border-border-sub p-5  h-17 w-full max-w-[480px] z-50">
          <div className="w-full h-full">
            <Link href="/home">
              <NavButton
                label="홈으로 이동"
                colorClass=" text-text-primary border border-border-primary"
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <NavButton
              label="상세보기"
              colorClass="bg-border-primary text-white"
              onClick={handleViewDetailClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
