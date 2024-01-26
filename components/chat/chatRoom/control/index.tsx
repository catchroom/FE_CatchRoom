'use client';

import React, { useEffect } from 'react';
import { useChatConnection } from '@/hooks/useChatConnection';
import ProductInfo from '../productInfo';
import { useRecoilValue } from 'recoil';
import { dealModalAtom } from '@/atoms/chat/leaveButton';
import OfferModal from '../offerModal';
import ChatMessageViewer from '../viewer';

const ChatRoomControl = ({ roomId }: { roomId: string }) => {
  const modalState = useRecoilValue(dealModalAtom);
  const {
    connect,
    disconnect,
    sendMessage,
    negoPrice,
    acceptPrice,
    denyPrice,
    accessToken,
  } = useChatConnection(roomId);

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
        <ChatMessageViewer
          token={accessToken}
          accept={acceptPrice}
          deny={denyPrice}
          send={sendMessage}
          roomId={roomId}
        />
        {modalState && <OfferModal publish={negoPrice} />}
      </div>
    </div>
  );
};

export default ChatRoomControl;
