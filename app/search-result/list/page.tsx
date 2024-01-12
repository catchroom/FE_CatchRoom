'use client';
import CatchItemContainer from '@/components/catchSale/catchItemContainer';
import ProductListControls from '@/components/search-result/list/productListControls';
import ToggleViewButton from '@/components/search-result/toggleViewButton';
import React, { useState } from 'react';

const Page = () => {
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');

  const toggleView = () => {
    setCurrentView(currentView === 'list' ? 'map' : 'list');
  };

  return (
    <div className="w-full flex flex-col">
      <ProductListControls />
      <CatchItemContainer />
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <ToggleViewButton currentView={currentView} onViewChange={toggleView} />
      </div>
    </div>
  );
};

export default Page;
