import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/type';

const ReceiveMessage = ({ content, date }: MessageProps) => {
  return (
    <div className="flex items-end mr-auto mb-3">
      <div className=" bg-white text-gray-900 border border-textSub text-p1 px-4 py-2 rounded-full">
        {content}
      </div>
      <p className="ml-2 text-gray-500 text-t3 ">{date}</p>
    </div>
  );
};

export default ReceiveMessage;