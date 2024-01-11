import { ProductDetailsProps } from '@/types/order/productDetails/types';
import React from 'react';

const ProductDetails = ({
  accommodationName,
  roomName,
}: ProductDetailsProps) => {
  return (
    <section className="p-2 mb-4">
      <h2 className="text-h4  mb-2 leading-8 font-bold text-gray-1000">
        {accommodationName}
      </h2>
      <p className="text-p1 leading-6 font-semibold text-text-sub">
        {roomName}
      </p>
    </section>
  );
};

export default ProductDetails;
