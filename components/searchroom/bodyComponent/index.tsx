import React from 'react';
import SearchBtnComponent from './searchComponent';
import ConfirmBtnComponent from './searchComponent/confirmBtn';

const BodyComponent = () => {
  return (
    <>
      {/* 지역, 날짜, 인원 수, 숙소 종류 검색 컴포넌트 */}
      <SearchBtnComponent />
      {/* 검색하기 버튼 컴포넌트 */}
      <ConfirmBtnComponent />
    </>
  );
};

export default BodyComponent;
