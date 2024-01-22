import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useChatConnection = (roomId: string) => {
  const [ws, setWs] = useState<CompatClient | null>(null);
  const setChatList = useSetRecoilState(chatContentAtom);
  const [cookies] = useCookies();

  const userId = cookies.id;
  const accessToken = cookies.accessToken;

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      reportErrors: true,
      debug: true,
    });
    const wsClient = Stomp.over(() => sockjs);

    setWs(wsClient);
    wsClient.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        wsClient.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          const recv = JSON.parse(message.body);
          console.log('Message recv:', message);
          setChatList((prev) => [...prev, recv]);
        });
      },
    );
  };

  const disconnect = () => {
    if (!ws) return;
    ws.unsubscribe(`/sub/chat/room/${roomId}`);
    setWs(null);
    setChatList([]);
    ws.disconnect();
    ws.deactivate();
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (message: string) => {
    if (!ws) return;
    ws.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        message: message,
        sender: '네고왕김네고',
        userId: userId,
        negoPrice: -1,
      }),
    });
  };

  return { connect, disconnect, sendMessage };
};
