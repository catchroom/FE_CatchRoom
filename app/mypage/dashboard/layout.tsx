import MyPageHeader from '@/components/mypage/header';
import React, { ReactNode } from 'react';

// showBackButton = false,
// showCloseButton = false,
// showMoreButton = false,
// showBorder = false,

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <MyPageHeader />
      <div className="w-full absolute h-[calc(100vh-61px)] overflow-hidden top-[53px]">
        {children}
      </div>
    </div>
  );
};

export default MypageLayout;
