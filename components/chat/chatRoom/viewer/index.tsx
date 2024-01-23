'use client';

import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ChatMessageViewer = () => {
  const messages = useRecoilValue(chatContentAtom);
  console.log('메세지 받은 내용 ', messages);
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
