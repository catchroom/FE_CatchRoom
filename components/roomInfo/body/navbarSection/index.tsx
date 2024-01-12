import React from 'react';
import NavbarButtonComponent from './navbarButton';
import NavbarPageComponent from './page';

// 객실 사진, 룸 타입, 기준인원/최대인원 PageComponent로 전송 필요
const NavbarSection = () => {
  return (
    <div className=" w-full mt-4 mb-[5.75rem] bg-bg">
      {/* Navbar 버튼 컴포넌트 */}
      <NavbarButtonComponent />
      {/* Navbar 페이지 컴포넌트 (객실정보, 숙소위치, 숙소정보)*/}
      <NavbarPageComponent />
    </div>
  );
};

export default NavbarSection;
