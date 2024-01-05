'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CHAT_ITEMS } from '@/constants/chat';
import Message from '@/components/chat/chatRoom/Message/index';

const MessageList = () => {
  const searchParams = useSearchParams();
  const chatId = Number(searchParams?.get('chatId'));
  return CHAT_ITEMS[chatId].MESSAGE_PREVIOUS.map((item) => {
    return (
      <Message
        key={item.MESSAGE_ID}
        userId={item.SEND_USER_ID}
        content={item.CONTENT}
        date={item.DATE}
      />
    );
  });
};

export default MessageList;
