import BodyComponent from '@/components/roomInfo/body';
import FooterComponent from '@/components/roomInfo/footer';
import HeaderComponent from '@/components/roomInfo/header';
import React from 'react';

// 판매등록자 여부에 따라 Header, Footer의 버튼이 변경될 예정.
const Page = () => {
  return (
    <div className="relative w-full  min-h-screen flex flex-col">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default Page;
