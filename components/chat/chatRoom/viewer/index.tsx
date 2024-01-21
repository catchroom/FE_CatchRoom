'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ChatMessageViewer = () => {
  const messages = useRecoilValue(chatContentAtom);
  return (
    <div>
      {messages.map((item, index) => (
        <div key={index}>
          {item.sender} : {item.message}
        </div>
      ))}
    </div>
  );
};

export default ChatMessageViewer;
