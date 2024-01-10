import React from 'react';
import { useSearchParams } from 'next/navigation';
import SendMessage from '../sendMessage';
import ReceiveMessage from '../receiveMessage';
import { MessageProps } from '@/types/chat/chatRoom/types';
import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
import OfferMessage from '../offerMessage';
import { CHAT_ITEMS } from '@/constants/chat';
import DeclineMessage from '../declineMessage';

const MessageItem = ({
  messageType,
  sendUserNickname,
  content,
  date,
  offerPrice,
  approvePrice,
}: MessageProps) => {
  const searchParams = useSearchParams();
  const chatId = Number(searchParams?.get('chatId'));
  const sellerNickname = CHAT_ITEMS[chatId].SELLER_NICKNAME;

  // 테스트를 위해 임의적으로 닉네임 적용
  const userNickname = '바나나맛우유';

  // MESSAGE_TYPE
  // 0: 일반 메시지
  // 1: 제안하기/ 제안받기 메시지
  // 2: 승인하기/ 승인받기 메시지
  // 3: 거절하기/ 거절받기 메시지

  if (userNickname === sendUserNickname) {
    switch (messageType) {
      case 0:
        return <SendMessage content={content} date={date} />;
      case 1:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
      case 2:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex flex-row-reverse gap-x-3 items-end  mr-auto mb-3">
              <ApproveMessage
                approvePrice={approvePrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <ApproveMessage
                approvePrice={approvePrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
      case 3:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
    }
  } else {
    switch (messageType) {
      case 0:
        return <ReceiveMessage content={content} date={date} />;
      case 1:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex  flex-row-reverse gap-x-3 items-end mr-auto mb-3 ">
              <OfferMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <OfferMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
      case 2:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex gap-x-3 items-end  ml-auto mb-3">
              <ApproveMessage
                approvePrice={approvePrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex gap-x-3 items-end ml-auto mb-3">
              <ApproveMessage
                approvePrice={approvePrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
      case 3:
        if (userNickname === sellerNickname) {
          return (
            <div className="w-5/6 flex gap-x-3 items-end ml-auto mb-3">
              <DeclineMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-5/6 flex gap-x-3 items-end ml-auto mb-3">
              <DeclineMessage
                offerPrice={offerPrice}
                date={date}
                isSeller={false}
              />
            </div>
          );
        }
    }
  }
};

export default MessageItem;
