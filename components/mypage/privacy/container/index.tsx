import React, { ReactNode } from 'react';

const PrivacyContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="border-b-2 py-3">개인 정보</h1>
      <div className="w-full flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default PrivacyContainer;
