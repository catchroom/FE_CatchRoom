import React, { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  return (
    // border값 추후 삭제 예정
    <main className="w-full max-w-[480px] h-screen overflow-y-scroll mx-auto border-2 border-gray-400">
      {children}
    </main>
  );
};

export default RootTemplate;
