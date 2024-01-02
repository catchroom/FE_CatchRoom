import React, { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  return (
    // border값 추후 삭제 예정
    <main className="w-full max-w-[480px] h-screen text-p1 font-pretend text-base overflow-y-scroll mx-auto border-2 box-content border-gray-400">
      {children}
    </main>
  );
};

export default RootTemplate;
