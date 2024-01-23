'use client';

import { useGetChatRoom } from '@/api/chat/query';
import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useRoomConnection = () => {
  const ws = useRef<CompatClient | null>(null);
  const setChatList = useSetRecoilState(chatAllRoomAtom);
  const [cookies] = useCookies();

  const accessToken = cookies.accessToken;
  const userId = cookies.id;

  const { data } = useGetChatRoom(accessToken);

  // 초기 데이터 로딩
  useEffect(() => {
    if (!data) return;
    setChatList(data);
  }, [data, setChatList]);

  // 연결
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
        ws.current?.subscribe(`/sub/chat/roomlist/${userId}`, (message) => {
          const recv = JSON.parse(message.body);
          setChatList(recv);
        });
      },
    );
  };

  // 연결 해제
  const disconnect = () => {
    if (!ws.current) return;
    ws.current.unsubscribe(`/sub/chat/roomlist/${userId}`);
    ws.current.disconnect();
    ws.current.deactivate();
  };

  return { connect, disconnect };
};
