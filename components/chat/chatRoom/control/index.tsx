'use client';

import React, { ReactNode, useEffect } from 'react';
import { useChatConnection } from '@/hooks/useChatConnection';
import ChatMessageSender from '../sender';
import ProductInfo from '../productInfo';
import { useRecoilValue } from 'recoil';
import { dealModalAtom } from '@/atoms/chat/leaveButton';
import OfferModal from '../offerModal';

const ChatRoomControl = ({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) => {
  const modalState = useRecoilValue(dealModalAtom);
  const { connect, disconnect, sendMessage, negoPrice } =
    useChatConnection(roomId);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full relative">
      <ProductInfo />
      <div className="relative">
        <div className={`h-[calc(100vh-130px)] overflow-scroll relative`}>
          {children}
          <ChatMessageSender publish={sendMessage} />
        </div>
        {modalState && <OfferModal publish={negoPrice} />}
      </div>
    </div>
  );
};

export default ChatRoomControl;
