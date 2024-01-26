import Header from '@/components/common/header';
import FilterBar from '@/components/search-result/filterBar';
import React, { ReactNode } from 'react';

const Searchlayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title="검색 결과" showBackButton showHomeButton />
      <FilterBar />
      <main className="w-full absolute h-full mt-20 ">{children}</main>
    </>
  );
};

export default Searchlayout;
