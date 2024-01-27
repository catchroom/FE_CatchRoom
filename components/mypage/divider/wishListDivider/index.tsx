import React, { ReactNode } from 'react';

const WishListDivider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-60px)] overflow-y-scroll px-5 py-[32px] gap-11">
      {children}
    </div>
  );
};

export default WishListDivider;
