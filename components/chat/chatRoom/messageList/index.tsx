'use client';
import React from 'react';
// import { useSearchParams } from 'next/navigation';
// import { CHAT_ITEMS } from '@/constants/chat';
import MessageItem from '@/components/chat/chatRoom/messageItem';
import { MessageProps } from '@/types/chat/chatRoom/types';

type MessageListProps = {
  messages: MessageProps[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <>
      {messages.map((item) => (
        <>
          <MessageItem
            key={item.time}
            type={item.type}
            message={item.message}
            sender={item.sender}
            userId={item.userId}
            time={item.time}
          />
        </>
      ))}
    </>
  );

  // CHAT_ITEMS[chatId].MESSAGE_PREVIOUS.map((item) => {
  //   return (
  //     <MessageItem
  //       key={item.MESSAGE_ID}
  //       messageType={item.MESSAGE_TYPE}
  //       sendUserNickname={item.SEND_USER_NICKNAME}
  //       content={item.CONTENT}
  //       date={item.DATE}
  //       offerPrice={item.OFFER_PRICE}
  //       approvePrice={item.APPROVE_PRICE}
  //     />
  //   );
  // });
};

export default MessageList;
