import CatchContainer from '@/components/home/catch/catchContainer';
import Header from '@/components/home/header';
import SearchBar from '@/components/home/searchBar';
import React from 'react';

const page = async () => {
  return (
    <div className="w-full h-full flex flex-col px-5 mt-5 items-center bg-primary">
      <Header />
      <SearchBar />
      <CatchContainer />
      {/* 준규님 컴포넌트 들어갈 자리 */}
    </div>
  );
};

export default page;
