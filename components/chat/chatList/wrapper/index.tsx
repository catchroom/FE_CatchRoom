import LoginButton from '@/app/talk/LoginButton';
import React, { ReactNode } from 'react';
import ModalControl from '../modalControl';

const ChatWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-[calc(100%-60px)] bg-mint overflow-scroll">
      <LoginButton />
      {children}
      <ModalControl />
    </div>
  );
};

export default ChatWrapper;