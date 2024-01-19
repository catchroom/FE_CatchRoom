import React from 'react';
import { useSearchParams } from 'next/navigation';
import SendMessage from '../sendMessage';
import ReceiveMessage from '../receiveMessage';
import { MessageProps } from '@/types/chat/chatRoom/types';
import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
import OfferMessage from '../offerMessage';
import { CHAT_ITEMS } from '@/constants/chat';
import DeclineMessage from '../declineMessage';
import { loadedChatInfo } from '@/api/chat/api';

const MessageItem = ({
  type,
  message,
  sender,
  time,
  negoPrice,
}: MessageProps) => {
  const searchParams = useSearchParams();
  const roomId = searchParams?.get('roomId');
  console.log(roomId);

  // // 채팅방 내부 정보 불러오기
  // const ChatInfo = async () => {
  //   try {
  //     const result = await loadedChatInfo(roomId);
  //     console.log(result);
  //   } catch (error) {
  //     console.error('failed:', error);
  //   }
  // };
  // ChatInfo();

  // 테스트를 위해 임의적으로 닉네임 적용
  const userNickname = '승연';

  if (userNickname === sender) {
    switch (type) {
      case 'TALK':
        return <SendMessage message={message} time={time} />;

      case 'NEGO_REQ':
        if (userNickname === sender) {
          return (
            <div className="w-11/12 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage negoPrice={negoPrice} time={time} isSeller={true} />
            </div>
          );
        } else {
          return (
            <div className="w-11/12 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 2:
        if (userNickname === sender) {
          return (
            <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end  mr-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 3:
        if (userNickname === sender) {
          return (
            <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
    }
  } else {
    switch (type) {
      case 'TALK':
        return <ReceiveMessage message={message} time={time} />;

      case 1:
        if (userNickname === sender) {
          return (
            <div className="w-11/12  flex  flex-row-reverse gap-x-3 items-end mr-auto mb-3 ">
              <OfferMessage negoPrice={negoPrice} time={time} isSeller={true} />
            </div>
          );
        } else {
          return (
            <div className="w-11/12  flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <OfferMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 2:
        if (userNickname === sender) {
          return (
            <div className="w-11/12 flex gap-x-3 items-end  ml-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 3:
        if (userNickname === sender) {
          return (
            <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
    }
  }
};

export default MessageItem;
