import React from 'react';
import RoomImageComponent from './roomImage';
import RoomInfoComponent from './roomInfo';
import NavbarSection from './navbarSection';

const BodyComponent = () => {
  return (
    <>
      {/* 숙소 이미지 컴포넌트 (숙소 관련 이미지들)*/}
      <RoomImageComponent />
      {/* 숙소 정보 컴포넌트 (숙소 데이터)*/}
      <RoomInfoComponent />
      {/* Navbar섹션 컴포넌트 (객실정보, 숙소위치, 숙소정보)*/}
      <NavbarSection />
    </>
  );
};

export default BodyComponent;
