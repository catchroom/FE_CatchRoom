import React from 'react';
import { CHAT_ITEMS } from '@/constants/chat';
import ChatItem from '../chatItem';
import Login from './login';

const ChatList = () => {
  return (
    <>
      {CHAT_ITEMS.map((item) => {
        return (
          <ChatItem
            key={item.ITEM_ID}
            itemId={item.ITEM_ID}
            image={item.ITEM_INFO.IMAGE}
            sellerNickname={item.SELLER_NICKNAME}
            lastMessageDate={item.MESSAGE_PREVIOUS.at(-1).DATE}
            lastMessageContent={item.MESSAGE_PREVIOUS.at(-1)?.CONTENT}
          />
        );
      })}
      {/* 비로그인시 아래 컴포넌트 노출 */}
      {/* <Login /> */}
    </>
  );
};

export default ChatList;
