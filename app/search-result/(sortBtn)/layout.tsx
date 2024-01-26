import Header from '@/components/common/header';
import FilterBar from '@/components/search-result/filterBar';
import ProductListControls from '@/components/search-result/list/productListControls';
import React, { ReactNode } from 'react';

const Searchlayout = ({
  children,
}: {
  children: ReactNode;
  accommodationsCount?: number;
}) => {
  return (
    <>
      <Header title="검색 결과" showBackButton showHomeButton />
      <FilterBar />
      <ProductListControls />
      <main className="w-full absolute h-[calc(100vh-200px)] top-[200px] overflow-y-scroll pb-10">
        {children}
      </main>
    </>
  );
};

export default Searchlayout;
