import BottomNav from '@/components/common/bottomNav';
import BottomSheets from '@/components/common/bottomSheets';
import Footer from '@/components/common/footer';
import CatchContainer from '@/components/home/catch/catchContainer';
import CheckInComponent from '@/components/home/deadLineItems';
import Content from '@/components/home/content';
import Header from '@/components/home/header';
import ReviewContainer from '@/components/home/review/reviewContainer';
import SearchBar from '@/components/home/searchBar';
import React from 'react';

const page = async () => {
  return (
    <div className="flex flex-col w-full h-full lg:px-5 mt-5 items-center bg-primary md:px-4 sm:px-3">
      <Header />
      {/* 검색바 컴포넌트 */}
      <SearchBar />
      {/* 캐치특가 숙소 컴포넌트 */}
      <CatchContainer />
      {/* 체크인 마감임박! 컴포넌트 */}
      <CheckInComponent />
      {/* 이용후기 컴포넌트 */}
      <ReviewContainer />
      <Footer />

      <div className="fixed bottom-16 z-30 max-w-[480px] w-full">
        <div className="absolute right-8 bottom-8">
          <BottomSheets
            buttonSelect="sale"
            title="숙박권 판매"
            innerTitle="판매할 숙박권을 선택해주세요."
          >
            <Content />
          </BottomSheets>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default page;
