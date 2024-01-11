import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';

const SendMessage = ({ content, date }: MessageProps) => {
  return (
    <div className="max-w-3/4 flex items-end ml-auto mb-3 ">
      <p className="mr-2 text-gray-500 text-t3">{date}</p>
      <div className="bg-gray-200 text-black text-p1 px-4 py-2 rounded-full">
        {content}
      </div>
    </div>
  );
};

export default SendMessage;
