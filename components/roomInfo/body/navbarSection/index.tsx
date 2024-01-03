import React from 'react';
import NavbarButtonComponent from './navbarButton';
import NavbarPageComponent from './page';

const NavbarSection = () => {
  return (
    <div className=" w-full h-[400px] mb-[5.1875rem] bg-white">
      {/* Navbar 버튼 컴포넌트 */}
      <NavbarButtonComponent />
      {/* 객실 정보에 해당하는 컴포넌트 */}
      <NavbarPageComponent />
    </div>
  );
};

export default NavbarSection;
