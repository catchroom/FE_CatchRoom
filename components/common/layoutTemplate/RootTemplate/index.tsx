import React, { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  return <main className="w-full max-w-96 bg-white">{children}</main>;
};

export default RootTemplate;
