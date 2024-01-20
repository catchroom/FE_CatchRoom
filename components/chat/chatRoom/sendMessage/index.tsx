import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { formatTime } from '@/utils/formatTime';

const SendMessage = ({ message, time }: MessageProps) => {
  return (
    <div className="max-w-3/4 flex items-end ml-auto mb-3 ">
      <p className="mr-2 text-gray-500 text-t3">{formatTime(time)}</p>
      <div className="bg-gray-200 text-black text-p1 px-4 py-2 rounded-full">
        {message}
      </div>
    </div>
  );
};

export default SendMessage;
