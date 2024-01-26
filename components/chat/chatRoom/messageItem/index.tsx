import React from 'react';
import SendMessage from '../sendMessage';
import ReceiveMessage from '../receiveMessage';
import { MessagePropsNoPartial } from '@/types/chat/chatRoom/types';
import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
import OfferMessage from '../offerMessage';
import DeclineMessage from '../declineMessage';
import { useCookies } from 'react-cookie';
import UserOut from '../userOut';
import { useRecoilValue } from 'recoil';
import { chatRoomInfo } from '@/atoms/chat/chatContentAtom';

const MessageItem = ({
  type,
  message,
  userId,
  time,
  negoPrice,
  accept,
  deny,
}: MessagePropsNoPartial) => {
  const [cookies] = useCookies();
  const chatInfo = useRecoilValue(chatRoomInfo);
  const sellerId = chatInfo.sellerId;
  const loginUserId = cookies.id;

  console.log(type, 'type');

  // 로그인한 유저가 해당 메시지의 보낸 사람일 때
  // 나
  if (loginUserId === userId) {
    switch (type) {
      case 'TALK':
        return <SendMessage message={message} time={time} />;
      case 'NEGO_REQ':
        return (
          <div className="w-full flex justify-end mb-3">
            <OfferMessage
              me={true}
              accept={accept}
              deny={deny}
              negoPrice={negoPrice}
              time={time}
              isSeller={loginUserId === sellerId}
            />
          </div>
        );
      // 승인
      case 'NEGO_ALLOW':
        return (
          <div className="w-full flex justify-end mb-3">
            <ApproveMessage
              me={true}
              negoPrice={negoPrice}
              time={time}
              isSeller={loginUserId === sellerId}
            />
          </div>
        );

      case 'DELETE':
        return <UserOut partnerNickName={chatInfo.partnerNickName as string} />;

      case 'NEGO_DENIED':
        return (
          <div className="w-full flex justify-end mb-3 ">
            <DeclineMessage
              me={true}
              negoPrice={negoPrice}
              time={time}
              isSeller={loginUserId === sellerId}
            />
          </div>
        );
    }
  }
  // 상대방
  else {
    switch (type) {
      case 'TALK':
        return <ReceiveMessage message={message} time={time} />;
      case 'NEGO_REQ':
        return (
          <div className="w-full flex mb-3">
            <OfferMessage
              me={false}
              accept={accept}
              deny={deny}
              negoPrice={negoPrice}
              time={time}
              isSeller={loginUserId === sellerId}
            />
          </div>
        );
      case 'NEGO_ALLOW':
        return (
          <div className="w-full flex mb-3">
            <ApproveMessage
              me={false}
              negoPrice={negoPrice}
              time={time}
              isSeller={loginUserId === sellerId}
            />
          </div>
        );
      case 'NEGO_DENIED':
        return (
          <div className="w-full flex mb-3">
            <DeclineMessage
              me={false}
              negoPrice={negoPrice}
              time={time}
              isSeller={userId === sellerId}
            />
          </div>
        );
      case 'DELETE':
        return <UserOut partnerNickName={chatInfo.partnerNickName as string} />;
    }
  }
};

export default MessageItem;
