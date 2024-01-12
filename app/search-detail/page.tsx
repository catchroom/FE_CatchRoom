import BodyComponent from '@/components/searchroom/bodyComponent';
import HeaderComponent from '@/components/searchroom/headerComponent';
import React from 'react';

const page = async () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* 화면 상단의 '숙소 검색' 컴포넌트 */}
      <HeaderComponent />
      {/* 검색버튼 및 확인버튼 컴포넌트 */}
      <BodyComponent />
    </div>
  );
};

export default page;
