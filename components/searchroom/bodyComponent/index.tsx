import React from 'react';
import ButtonComponent from './searchComponent';

const BodyComponent = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      {/* 지역, 날짜, 인원 수, 숙소 종류 검색 컴포넌트 */}
      <ButtonComponent />
    </div>
  );
};

export default BodyComponent;
