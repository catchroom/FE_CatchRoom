import React, { ReactNode } from 'react';

const ChatWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-[calc(100%-60px)] overflow-scroll">{children}</div>
  );
};

export default ChatWrapper;
