import CheckInDateComponent from '@/components/common/checkInDateComponent';
import { ProductDetailsProps } from '@/types/order/productDetails/types';
import Image from 'next/image';
import React from 'react';

const ProductDetails = ({
  accommodationName,
  roomName,
  normalCapacity,
  maxCapacity,
  imageUrl,
}: ProductDetailsProps) => {
  return (
    <div className="flex flex-col pb-5 border-b border-gray-200">
      <div className="flex flex-col gap-6">
        <h3 className="text-h5 font-bold text-text-DEFAULT ">
          상품 및 이용정보
        </h3>
        <section className="flex gap-5 mb-5 ">
          <div className="w-32 h-32 relative mr-4">
            <Image
              src={imageUrl}
              alt={accommodationName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-h5 font-bold text-text-DEFAULT mb-1">
              {accommodationName}
            </h2>
            <p className="text-t1 font-semibold text-text-sub">{roomName}</p>
            <p className="mt-4 text-t1 text-text-sub">
              기준 {normalCapacity}명 / 최대 {maxCapacity}명
            </p>
          </div>
        </section>
      </div>
      <CheckInDateComponent
        CheckInDate="01.01 (월)"
        CheckOutDate="01.03 (월)"
      />
    </div>
  );
};

export default ProductDetails;
