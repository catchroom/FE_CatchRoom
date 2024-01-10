'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CHAT_ITEMS } from '@/constants/chat';
import MessageItem from '@/components/chat/chatRoom/messageItem';

const MessageList = () => {
  const searchParams = useSearchParams();
  const chatId = Number(searchParams?.get('chatId'));
  return CHAT_ITEMS[chatId].MESSAGE_PREVIOUS.map((item) => {
    return (
      <MessageItem
        key={item.MESSAGE_ID}
        messageType={item.MESSAGE_TYPE}
        sendUserNickname={item.SEND_USER_NICKNAME}
        content={item.CONTENT}
        date={item.DATE}
        offerPrice={item.OFFER_PRICE}
        approvePrice={item.APPROVE_PRICE}
      />
    );
  });
};

export default MessageList;
