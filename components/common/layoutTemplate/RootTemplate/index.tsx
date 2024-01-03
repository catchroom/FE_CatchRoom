import React, { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  return (
    // border값 추후 삭제 예정
    <main className="w-full max-w-[480px] h-screen text-p1 text-text font-pretend text-base overflow-y-scroll mx-auto bg-bg">
      {children}
    </main>
  );
};

export default RootTemplate;
