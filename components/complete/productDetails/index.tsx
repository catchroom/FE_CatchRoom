import { ProductDetailsProps } from '@/types/order/productDetails/types';
import React from 'react';

const ProductDetails = ({
  accommodationName,
  roomName,
}: ProductDetailsProps) => {
  return (
    <section className="p-2 mt-20 text-center">
      <h2 className="text-h2  text-gray-1000 mb-2">{accommodationName}</h2>
      <p className="text-p2 text-gray-1000">{roomName}</p>
    </section>
  );
};

export default ProductDetails;
