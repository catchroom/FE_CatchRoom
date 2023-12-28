import Price from '@/components/sale/price';
import SaleEndContainer from '@/components/sale/saleEndContainer';
import SaleInfoContainer from '@/components/sale/saleInfoContainer';
import SellingPriceContainer from '@/components/sale/sellingPrice/sellingPriceContainer';
import React from 'react';

const Sale = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center mt-[73px] px-3">
      <SaleInfoContainer />
      <SaleEndContainer />
      <SellingPriceContainer />
      <Price />
    </div>
  );
};

export default Sale;
