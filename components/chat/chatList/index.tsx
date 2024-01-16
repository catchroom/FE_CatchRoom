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
            itemId={item.ITEM_ID}
            image={item.ITEM_INFO.IMAGE}
            sellerNickname={item.SELLER_NICKNAME}
            lastMessageDate={'2021-10-10'} //item.MESSAGE_PREVIOUS.at(-1)?.CREATED
            lastMessageContent={'안녕하세요'} //item.MESSAGE_PREVIOUS.at(-1)?.CONTENT
          />
        );
      })}
      {/* 비로그인시 아래 컴포넌트 노출 */}
      {/* <Login /> */}
    </>
  );
};

export default ChatList;
