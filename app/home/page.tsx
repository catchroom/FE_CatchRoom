import BottomNav from '@/components/common/bottomNav';
import BottomSheets from '@/components/common/bottomSheets';
import Footer from '@/components/common/footer';
import SaleItems from '@/components/home/bottomsheetContent/saleItems';
import CatchContainer from '@/components/home/catch/catchContainer';
import CheckInComponent from '@/components/home/checkIn';
import Header from '@/components/home/header';
import ReviewContainer from '@/components/home/review/reviewContainer';
import SearchBar from '@/components/home/searchBar';
import React from 'react';

const page = async () => {
  const isSuccess = true;
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
      <Footer />
      <div className="fixed bottom-20 right-5 z-30">
        <BottomSheets
          buttonSelect="sale"
          title="숙박권 판매"
          closeButton={true}
          innerTitle="판매할 숙박권을 선택해주세요."
          innerButtonTitle="확인"
        >
          {isSuccess ? (
            <SaleItems />
          ) : (
            <div className="flex flex-col items-center">
              <p>판매 가능한 숙박권이 없습니다</p>
              <p>
                무료취소 가능 및 체크인 당일 자정 이후 숙박권은 판매할 수
                없습니다.
              </p>
            </div>
          )}
        </BottomSheets>
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
