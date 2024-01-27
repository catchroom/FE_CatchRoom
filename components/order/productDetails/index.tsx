import { BasicProductDetailsProps } from '@/types/order/productDetails/types';
import React from 'react';

const ProductDetails = ({
  accommodationName,
  roomName,
}: BasicProductDetailsProps) => {
  return (
    <section className="px-2 pt-2 mb-5">
      <h2 className="text-h4  leading-8 font-bold text-gray-1000">
        {accommodationName}
      </h2>
      <p className="text-t2 leading-6 font-semibold text-text-sub">
        {roomName}
      </p>
    </section>
  );
};

export default ProductDetails;
