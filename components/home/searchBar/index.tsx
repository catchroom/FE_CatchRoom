'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  const pageHandler = () => {
    router.push('/search-detail');
  };

  return (
    <button
      className="flex justify-between w-full p-4 rounded-[4px] text-text-sub text-t2 font-normal bg-surface-gray "
      onClick={pageHandler}
    >
      <p>지역, 여행 일정, 숙소 유형으로 검색해보세요</p>
      <Image src="/search-md.svg" alt="seachIcon" width={24} height={24} />
    </button>
  );
};

export default SearchBar;
