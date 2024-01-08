import Header from '@/components/common/header';
import React, { ReactNode } from 'react';

// showBackButton = false,
// showCloseButton = false,
// showMoreButton = false,
// showBorder = false,

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[480px] fixed inset-0 left-1/2 -translate-x-1/2">
        <Header title="hello" showBackButton showBorder />
      </div>
      <div className="w-full absolute h-[calc(100vh-61px)] overflow-hidden top-[61px]">
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default MypageLayout;
