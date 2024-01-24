import Header from '@/components/common/header';
import React, { ReactNode } from 'react';

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-full inset-0 ">
        <Header title="채팅" showBackButton showBorder />
      </div>
      <div className="w-full absolute h-[calc(100vh-61px)] overflow-auto top-[53px]">
        {children}
      </div>
    </div>
  );
};
export default MypageLayout;
