import React from 'react';
import { MessageProps } from '@/types/chat/chatRoom/types';
import { formatTime } from '@/utils/formatTime';

const SendMessage = ({ message, time }: MessageProps) => {
  const messageContainerClasses = `bg-surface-gray text-text text-p1 px-4 py-2 whitespace-normal max-w-56 ${
    message && message.length > 12 ? 'rounded-3xl' : 'rounded-full'
  }`;

  return (
    <div className="w-fit max-w-9/12 flex items-end ml-auto mb-3">
      <p className="mr-2 text-gray-500 text-t3">{formatTime(time)}</p>
      <div className={messageContainerClasses}>{message}</div>
    </div>
  );
};

export default SendMessage;
