'use client';

import { useGetPreviousChat, useInitialChatInfo } from '@/api/chat/query';
import { chatContentAtom, chatRoomInfo } from '@/atoms/chat/chatContentAtom';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useChatConnection = (roomId: string) => {
  const setChatList = useSetRecoilState(chatContentAtom);
  const setChatInfo = useSetRecoilState(chatRoomInfo);
  const [cookies] = useCookies();

  const accessToken = cookies.accessToken;
  const userId = cookies.userId;

  const { data } = useGetPreviousChat(roomId, accessToken);
  const { data: chatInfo } = useInitialChatInfo(roomId, accessToken);
  const ws = useRef<CompatClient | null>(null);

  // 초기 데이터 로딩
  useEffect(() => {
    if (!data) return;
    setChatList([...data].reverse());

    if (!chatInfo) return;
    setChatInfo(chatInfo);
  }, [chatInfo, data, setChatInfo, setChatList]);

  // 연결
  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      reportErrors: true,
      debug: false,
    });
    const wsClient = Stomp.over(() => sockjs);
    ws.current = wsClient;
    ws.current.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.current?.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          const recv = JSON.parse(message.body);
          setChatList((prev) => [recv, ...prev]);
        });
      },
    );
  };

  // 연결 해제
  const disconnect = () => {
    if (!ws.current) return;
    ws.current.unsubscribe(`/sub/chat/room/${roomId}`);
    ws.current.disconnect();
    ws.current.deactivate();
  };

  // 메시지 전송
  const sendMessage = (message: string) => {
    if (!ws.current) return;
    ws.current.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        message: message,
        userId: userId,
        negoPrice: -1,
      }),
    });
    console.log('메시지 전송', userId);
  };

  // 가격 제안
  const negoPrice = (price: number) => {
    if (!ws.current) return;
    ws.current.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'NEGO_REQ',
        roomId: roomId,
        message: '가격 제안',
        userId: userId,
        negoPrice: price,
      }),
    });
  };

  // 가격 승인
  const acceptPrice = (price: number) => {
    if (!ws.current) return;
    ws.current.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'NEGO_ALLOW',
        roomId: roomId,
        message: '제안 수락',
        userId: userId,
        negoPrice: price,
      }),
    });
  };

  // 가격 승인
  const denyPrice = (price: number) => {
    alert('거절');
    if (!ws.current) return;
    ws.current.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'NEGO_DENIED',
        roomId: roomId,
        message: '제안 거절',
        userId: userId,
        negoPrice: price,
      }),
    });
  };

  return {
    connect,
    disconnect,
    sendMessage,
    negoPrice,
    acceptPrice,
    denyPrice,
    roomId,
    userId,
    accessToken,
  };
};
