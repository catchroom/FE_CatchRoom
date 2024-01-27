import Header from '@/components/common/header';
import React from 'react';
import InfoBox from '@/components/order/infoBox';
import OrderDetail from '@/components/order/complete/detail';

const page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const id = parseInt(searchParams.id as string);

  return (
    <>
      <Header
        title="상세보기"
        showCloseButton
        showBorder
        closeButtonRedirectPath="/mypage/dashboard/purchase"
      />
      <div className="flex flex-col container mx-auto w-full px-5 pt-4  pb-5 mt-14 bg-bg">
        <OrderDetail id={id} />
        <InfoBox messageKey={'refundInfo'} />
      </div>
    </>
  );
};

export default page;
