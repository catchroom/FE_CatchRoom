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

      <div className="fixed bottom-16 z-30 max-w-[480px] w-full">
        <div className="absolute right-8 bottom-8">
          <BottomSheets
            buttonSelect="sale"
            title="숙박권 판매"
            innerTitle="판매할 숙박권을 선택해주세요."
          >
            {isSuccess ? (
              <SaleItems />
            ) : (
              <div className="flex flex-col items-center gap-2 max-w-[271px]">
                <p className="text-t2 font-semibold">
                  판매 가능한 숙박권이 없습니다
                </p>
                <p className="text-t3 text-text-sub text-center">
                  오늘 체크인이 가능하고 무료 취소가 불가한 숙박권만 판매할 수
                  있어요.
                </p>
              </div>
            )}
          </BottomSheets>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default page;
