import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';

const ReceiveMessage = ({ message, time }: MessageProps) => {
  return (
    <div className="flex items-end mr-auto mb-3">
      <div className=" bg-white text-gray-900 border  border-border-sub text-p1 px-4 py-2 rounded-full">
        {message}
      </div>
      <p className="ml-2 text-gray-500 text-t3 ">{time}</p>
    </div>
  );
};

export default ReceiveMessage;
