import SaleEndContainer from '@/components/sale/saleEndContainer';
import SaleInfoContainer from '@/components/sale/saleInfoContainer';
import React from 'react';

const Sale = () => {
  return (
    <div className="relative min-h-screen flex justify-center">
      <SaleInfoContainer />
      <SaleEndContainer />
    </div>
  );
};

export default Sale;
