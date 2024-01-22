'use client';

import { useGetPreviousChat } from '@/api/chat/query';
import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useChatConnection = (roomId: string) => {
  const setChatList = useSetRecoilState(chatContentAtom);
  const [cookies] = useCookies();

  const accessToken = cookies.accessToken;
  const userId = cookies.id;

  const { data } = useGetPreviousChat(roomId, accessToken);
  console.log(data);
  const ws = useRef<CompatClient | null>(null);

  // 초기 데이터 로딩
  useEffect(() => {
    if (!data) return;
    console.log(data);
    setChatList(data);
  }, [data, setChatList]);

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      reportErrors: true,
      debug: true,
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
        wsClient.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          const recv = JSON.parse(message.body);
          setChatList((prev) => [...prev, recv]);
        });
      },
    );
  };

  const disconnect = () => {
    if (!ws.current) return;
    ws.current.unsubscribe(`/sub/chat/room/${roomId}`);
    ws.current.disconnect();
    ws.current.deactivate();
  };

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
  };

  return { connect, disconnect, sendMessage };
};
