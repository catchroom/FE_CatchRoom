import React from 'react';
import RoomImageComponent from './roomImage';
import RoomInfoComponent from './roomInfo';
import NavbarSection from './navbarSection';

const BodyComponent = () => {
  return (
    <>
      {/* 숙소 이미지 컴포넌트 */}
      <RoomImageComponent />
      {/* 숙소 정보 컴포넌트 */}
      <RoomInfoComponent />
      {/* Navbar섹션 컴포넌트 */}
      <NavbarSection />
    </>
  );
};

export default BodyComponent;
