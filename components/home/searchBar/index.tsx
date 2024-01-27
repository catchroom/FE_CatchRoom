'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [screenSize, setScreenSize] = useState('l');

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 390) setScreenSize('l');
      else if (window.innerHeight >= 320 && window.innerWidth < 390)
        setScreenSize('m');
      else setScreenSize('s');
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  }, []);
  const router = useRouter();

  const pageHandler = () => {
    router.push('/search-detail');
  };

  const title =
    screenSize === 'l'
      ? '지역, 여행 일정, 숙소 유형으로 검색해보세요'
      : '지역, 여행 일정, 숙소 유형으로 검색';
  return (
    <div
      className="flex justify-between w-full p-4 rounded-[4px] text-text-sub text-t2 font-normal bg-surface-secondary md:p-3 sm:p-3 sm:text-p4 items-center"
      onClick={pageHandler}
    >
      <p>{title}</p>
      <Image
        src="/search-md.svg"
        alt="searchIcon"
        width={24}
        height={24}
        className="sm:w-4 sm:h-4"
      />
    </div>
  );
};

export default SearchBar;
