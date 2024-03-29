'use client';
import { accommodationsCountState } from '@/atoms/search-result/countAtom';
import AccommodationList from '@/components/search-result/list/accommodationList';
import ToggleViewButton from '@/components/search-result/toggleViewButton';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

const Page = () => {
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');

  const accommodationsCount = useRecoilValue(accommodationsCountState);

  const toggleView = () => {
    setCurrentView(currentView === 'list' ? 'map' : 'list');
  };

  return (
    <div className="w-full flex flex-col -mt-32">
      <AccommodationList />
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[3]">
        {accommodationsCount > 0 && (
          <Link href="/search-result/map" passHref>
            <ToggleViewButton
              currentView={currentView}
              onViewChange={toggleView}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
