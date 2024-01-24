import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { formatTime } from '@/utils/formatTime';

const ReceiveMessage = ({ message, time }: MessageProps) => {
  return (
    <div className="flex items-end mr-auto mb-3">
      <div className=" bg-white text-gray-900 border  border-border-sub text-p1 px-4 py-2 rounded-full">
        {message}
      </div>
      <p className="ml-2 text-gray-500 text-t3 ">{formatTime(time)}</p>
    </div>
  );
};

export default ReceiveMessage;
