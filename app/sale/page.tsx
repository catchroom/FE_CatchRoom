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
  return (
    <div>
      <Header title="판매하기" showBackButton={true} isSale={true} />
      <div className="lg:p-5 md:p-4 sm:p-3 p-3 mt-[52px]">
        <SaleInfoContainer id={searchParams.id} />
        <Line />
        <SaleEndContainer />
        <Line />
        <SellingPriceContainer />
        <Line />
        <CatchContainer />
        <Line />
        <CheckboxContainer />
      </div>
    </div>
  );
};

export default Page;
