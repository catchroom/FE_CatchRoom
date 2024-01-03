import CatchContainer from '@/components/home/catch/catchContainer';
import Header from '@/components/home/header';
import ReviewContainer from '@/components/home/review/reviewContainer';
import SearchBar from '@/components/home/searchBar';
import React from 'react';

const page = async () => {
  return (
    <div className="w-full h-full flex flex-col px-5 mt-5 items-center bg-primary">
      <Header />
      <SearchBar />
      <CatchContainer />
      <ReviewContainer />
    </div>
  );
};

export default page;
