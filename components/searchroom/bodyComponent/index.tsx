import React from 'react';
import ButtonComponent from './searchComponent';
import FooterComponent from './footerComponent';

const BodyComponent = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      {/* 지역, 날짜, 인원 수, 숙소 종류 검색 컴포넌트 */}
      <ButtonComponent />
      {/* submit버튼 (확인버튼) 컴포넌트 */}
      <FooterComponent />
    </div>
  );
};

export default BodyComponent;
