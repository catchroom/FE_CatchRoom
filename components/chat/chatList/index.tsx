import React from 'react';
import { CHAT_ITEMS } from '@/constants/chat';
import ChatItem from '../chatItem';

const ChatList = () => {
  return (
    <>
      {CHAT_ITEMS.map((item) => {
        return (
          <ChatItem
            key={item.ITEM_ID}
            id={item.ITEM_ID}
            image={item.ITEM_INFO.IMAGE}
            sellerNickname={item.SELLER_NICKNAME}
            lastMessageDate={item.MESSAGE_PREVIOUS.at(-1).DATE}
            lastMessageContent={item.MESSAGE_PREVIOUS.at(-1)?.CONTENT}
          />
        );
      })}
    </>
  );
};

export default ChatList;
