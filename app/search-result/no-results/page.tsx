import ProductListControls from '@/components/search-result/list/productListControls';
import NoResults from '@/components/search-result/noResults';
import React from 'react';

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <ProductListControls />
      <NoResults />
    </div>
  );
};

export default page;
