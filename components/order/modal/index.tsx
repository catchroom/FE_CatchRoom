import React from 'react';
import ActionButton from './actionButton';
import { ModalProps } from '@/types/order/modal/type';
import BookingDetails from './bookingDetails';
import Disclaimer from './disclaimer';
import Link from 'next/link';
import { useQueryGetOrderProduct } from '@/api/order/query';
import { useParams } from 'next/navigation';

const PaymentModal = ({ isOpen, onClose }: ModalProps) => {
  const params = useParams<{ id: string }>();
  const productId = params ? parseInt(params.id, 10) : 0;

  const { data, isLoading, error } = useQueryGetOrderProduct(productId);

  if (!isOpen) return null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;
  const { accommodationName, productName, checkInDate, checkOutDate } =
    data.product;

  return (
    <div className="fixed z-20 inset-0  bg-gray-1000 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white w-full max-w-sm m-auto rounded">
        <div className="p-5">
          <BookingDetails
            accommodationName={productName}
            roomName={accommodationName}
            CheckInDate={checkInDate}
            CheckOutDate={checkOutDate}
          />
          <Disclaimer />
          <div className="flex justify-center space-x-4 mt-5">
            <ActionButton
              action={onClose}
              label="취소"
              colorClass=" text-text-primary border border-border-primary"
            />
            <Link href="/order/complete" passHref>
              <ActionButton
                label="동의 후 결제"
                colorClass="bg-border-primary text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;
