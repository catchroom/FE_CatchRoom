import React from 'react';
import SendMessage from '../sendMessage';
import ReceiveMessage from '../receiveMessage';
import { MessageProps } from '@/types/chat/chatRoom/types';
import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
import OfferMessage from '../offerMessage';
import DeclineMessage from '../declineMessage';
import { useRecoilState } from 'recoil';
import { chatRoomAtom } from '@/atoms/chat/chatContentAtom';

const MessageItem = ({
  type,
  message,
  userId,
  time,
  negoPrice,
}: MessageProps) => {
  const [isChatRoomInfo] = useRecoilState(chatRoomAtom);

  const loginUserId = 4;
  const sellerId = isChatRoomInfo.sellerId;

  // 로그인한 유저가 해당 메시지의 보낸 사람일 때
  if (loginUserId === userId) {
    switch (type) {
      case 'TALK':
        return <SendMessage message={message} time={time} />;
      case 'NEGO_REQ':
        if (userId === sellerId) {
          return (
            <div className="w-9/12 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage negoPrice={negoPrice} time={time} isSeller={true} />
            </div>
          );
        } else {
          return (
            <div className="w-9/12 flex  gap-x-3 items-end ml-auto mb-3">
              <OfferMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 'NEGO_ALLOW':
        if (userId === sellerId) {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end  mr-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-9/12 flex gap-x-3 items-end ml-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 'NEGO_DENIED':
        if (userId === sellerId) {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-9/12 flex gap-x-3 items-end ml-auto mb-3">
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
  // 로그인한 유저가 해당 메시지의 받는 사람일 때
  else {
    switch (type) {
      case 'TALK':
        return <ReceiveMessage message={message} time={time} />;

      case 'NEGO_REQ':
        if (userId === sellerId) {
          return (
            <div className="w-9/12  flex  flex-row-reverse gap-x-3 items-end mr-auto mb-3 ">
              <OfferMessage negoPrice={negoPrice} time={time} isSeller={true} />
            </div>
          );
        } else {
          return (
            <div className="w-9/12  flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <OfferMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 'NEGO_ALLOW':
        if (userId === sellerId) {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end  mr-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <ApproveMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={false}
              />
            </div>
          );
        }
      case 'NEGO_DENIED':
        if (userId === sellerId) {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
              <DeclineMessage
                negoPrice={negoPrice}
                time={time}
                isSeller={true}
              />
            </div>
          );
        } else {
          return (
            <div className="w-9/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
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
