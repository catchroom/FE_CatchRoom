import React from 'react';
import ItemsComponent from '@/components/catchItems/items';
import HeaderComponent from '@/components/catchItems/header';

const page = async () => {
  return (
    <div className="w-full flex flex-col">
      {/* 날짜 및 지역 필터가 포함된 컴포넌트 */}
      <HeaderComponent />
      {/* 숙박 상품 관련 컴포넌트 */}
      <ItemsComponent />
    </div>
  );
};

export default page;
