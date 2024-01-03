'use client';

import React from 'react';
import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className="flex w-full p-4 mt-16 rounded bg-gray-300 flex justify-between">
      <p>도시, 여행 일정, 숙소 유형으로 검색해보세요</p>
      <Image src="/search-md.svg" alt="seachIcon" width={24} height={24} />
    </div>
  );
};

export default SearchBar;
