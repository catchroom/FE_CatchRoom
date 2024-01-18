import Header from '@/components/common/header';
import CatchContainer from '@/components/sale/catch/catchContainer';
import CheckboxContainer from '@/components/sale/checkboxContainer';
import Line from '@/components/sale/line';
import SaleEndContainer from '@/components/sale/saleEndContainer';
import SaleInfoContainer from '@/components/sale/saleInfoContainer';
import SellingPriceContainer from '@/components/sale/sellingPrice/sellingPriceContainer';
import React from 'react';

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams.id);
  return (
    <div>
      <Header title="판매하기" showBackButton={true} isSale={true} />
      <div className="p-5">
        <SaleInfoContainer />
        <Line />
        <SaleEndContainer />
        <Line />
        <SellingPriceContainer price={132000} />
        <Line />
        <CatchContainer price={132000} />
        <Line />
        <CheckboxContainer />
      </div>
    </div>
  );
};

export default Page;
