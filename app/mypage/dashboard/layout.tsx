import Header from '@/components/common/header';
import React, { ReactNode } from 'react';

// showBackButton = false,
// showCloseButton = false,
// showMoreButton = false,
// showBorder = false,

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Header title="hello" showBackButton showBorder />
      {children}
    </div>
  );
};

export default MypageLayout;
