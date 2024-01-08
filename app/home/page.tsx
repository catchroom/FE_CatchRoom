import BottomSheets from '@/components/common/bottomSheets';
import CatchContainer from '@/components/home/catch/catchContainer';
import CheckInComponent from '@/components/home/checkIn';
import Header from '@/components/home/header';
import ReviewContainer from '@/components/home/review/reviewContainer';
import SearchBar from '@/components/home/searchBar';
import React from 'react';

const page = async () => {
  return (
    <div className="flex flex-col w-full h-full px-5 mt-5 items-center bg-primary">
      <Header />
      {/* 검색바 컴포넌트 */}
      <SearchBar />
      {/* 캐치특가 숙소 컴포넌트 */}
      <CatchContainer />
      {/* 체크인 마감임박! 컴포넌트 */}
      <CheckInComponent />
      {/* 이용후기 컴포넌트 */}
      <ReviewContainer />
      <div className="fixed bottom-8 right-5 z-30">
        {/* <SaleButton /> */}
        <BottomSheets buttonSelect="sale" title="숙박권 판매" closeButton>
          <div>안녕</div>
        </BottomSheets>
      </div>
    </div>
  );
};

export default page;
