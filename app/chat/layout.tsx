import HeadWrapper from '@/components/chat/headWrapper';
import React, { ReactNode } from 'react';

const MypageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-full inset-0 ">
        <HeadWrapper />
      </div>
      <div className="w-full absolute h-[calc(100vh-53px)] overflow-hidden top-[53px]">
        {children}
      </div>
    </div>
  );
};
export default MypageLayout;
