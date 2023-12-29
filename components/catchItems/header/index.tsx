import React from 'react';
import TopHeader from './topHeader';
import BottomHeader from './bottomHeader';
import MiddleHeader from './middleHeader';

const HeaderComponent = () => {
  return (
    <div className="w-full max-w-[475px] fixed z-20 top-0 bg-white box-border">
      {/* 날짜 (ex.2024년 1월) 및 뒤로가기 버튼의 상단 헤더 */}
      <TopHeader />
      {/* 요일, 일수 (ex.목, 24일) 를 포함하는 중단 헤더 */}
      <MiddleHeader />
      {/* 상품 수 조회 및 지역을 선택할 수 있는 하단 헤더 */}
      <BottomHeader />
    </div>
  );
};

export default HeaderComponent;
