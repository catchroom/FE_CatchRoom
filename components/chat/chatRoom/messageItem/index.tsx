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
  const loginUserId = cookies.userId;
  const isSeller = chatInfo.loginUserIdentity === 'BUYER' ? false : true;

  console.log('chatInfo', chatInfo);

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
              accept={accept}
              deny={deny}
              negoPrice={negoPrice}
              time={time}
              isSeller={isSeller}
            />
          </div>
        );
      // 승인
      case 'NEGO_ALLOW':
        return (
          <div className="w-full flex justify-end mb-3">
            <ApproveMessage
              negoPrice={negoPrice}
              time={time}
              isSeller={isSeller}
            />
          </div>
        );

      case 'DELETE':
        return <UserOut partnerNickName={chatInfo.partnerNickName as string} />;

      case 'NEGO_DENIED':
        return (
          <div className="w-full flex justify-end mb-3 ">
            <DeclineMessage
              negoPrice={negoPrice}
              time={time}
              isSeller={isSeller}
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
              accept={accept}
              deny={deny}
              negoPrice={negoPrice}
              time={time}
              isSeller={isSeller}
            />
          </div>
        );
      case 'NEGO_ALLOW':
        return (
          <div className="w-full flex mb-3">
            <ApproveMessage
              negoPrice={negoPrice}
              time={time}
              isSeller={isSeller}
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
              isSeller={isSeller}
            />
          </div>
        );
      case 'DELETE':
        return <UserOut partnerNickName={chatInfo.partnerNickName as string} />;
    }
  }
};

export default MessageItem;
