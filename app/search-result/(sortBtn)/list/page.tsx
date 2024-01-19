'use client';
import CatchItemContainer from '@/components/catchSale/catchItemContainer';
import ToggleViewButton from '@/components/search-result/toggleViewButton';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');

  const toggleView = () => {
    setCurrentView(currentView === 'list' ? 'map' : 'list');
  };

  return (
    <div className="w-full flex flex-col">
      <CatchItemContainer />
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/search-result/map" passHref>
          <ToggleViewButton
            currentView={currentView}
            onViewChange={toggleView}
          />
        </Link>
      </div>
    </div>
  );
};

export default Page;
