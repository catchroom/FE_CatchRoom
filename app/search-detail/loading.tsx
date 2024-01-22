import React from 'react';
import HeaderComponent from '@/components/searchroom/headerComponent';

const page = async () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* 화면 상단의 '숙소 검색' 컴포넌트 */}
      <HeaderComponent />
      {/* 검색버튼 및 확인버튼 스켈레톤 UI */}
      <div className="relative flex flex-col justify-between h-full p-5 animate-pulse">
        <div className="flex flex-col">
          <div className="h-14 bg-divider-sub rounded-[4px] my-1" />
          <div className="h-14 bg-divider-sub rounded-[4px] my-1" />
          <div className="h-14 bg-divider-sub rounded-[4px] my-1" />
          <div className="h-14 bg-divider-sub rounded-[4px] my-1" />
        </div>
        <div className="h-11 bg-divider-sub rounded-[4px]" />
      </div>
    </div>
  );
};

export default page;
