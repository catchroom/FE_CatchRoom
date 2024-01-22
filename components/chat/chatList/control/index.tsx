'use client';

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
// import ChatItem from '../../chatItem';
import { useCookies } from 'react-cookie';
// import { useGetChatRoom } from '@/api/chat/query';
// import { ChatRoomType } from '@/types/chat/chatRoom/types';
const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

const ChatList = () => {
  const [ws, setWs] = useState<CompatClient | null>(null);
  const [cookies] = useCookies();
  // eslint-disable-next-line
  const [message, setMessage] = useState<any>([]);
  // const { data } = useGetChatRoom(cookies.accessToken);

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    const ws = Stomp.over(sockjs);

    setWs(ws);

    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
          const recv = JSON.parse(message.body);
          console.log(recv);
          // eslint-disable-next-line
          setMessage((prev: any) => [...prev, recv]);
        });

        ws.publish({
          destination: `/pub/chat/message`,
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
          body: JSON.stringify({
            roomId: '4',
            sender: '민섭',
            type: 'ENTER',
            userId: 'user2',
            message: '소켓 연결 성공!',
          }),
        });
      },
    );
  };

  useEffect(() => {
    connect();
    return () => {
      ws?.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  console.log(message);

  return (
    <div className="w-full h-full">
      {/* {data &&
        data.map((item: ChatRoomType, index: number) => {
          return (
            <ChatItem
              key={index}
              buyerId={item.buyerId}
              chatRoomNumber={item.chatRoomNumber}
              sellerId={item.sellerId}
              productId={item.productId}
              loginUserIdentity={item.loginUserIdentity}
              accommodationUrl={item.accommodationUrl}
            />
          );
        })} */}
    </div>
  );
};

export default ChatList;

export type ChatContentType = {
  type: 'ENTER' | 'TALK' | 'QUIT';
  message: string;
  sender: string;
  roomId: string;
  userId: string;
};

// export const StompPage = ({ children }: { children: ReactNode }) => {
//   const [message, setMessage] =
//     useRecoilState<ChatContentType[]>(chatContentAtom);
//

//   const connect = () => {
//     const sockjs = new SockJS('http://13.124.240.142:8080/ws-stomp');
//     console.log(sockjs);
//     const ws = Stomp.over(sockjs);
//     console.log(ws);

//     setWs(ws);

//     // eslint-disable-next-line
//     ws.connect({}, () => {
//       ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
//         const recv = JSON.parse(message.body);
//         setMessage((prev) => [...prev, recv]);
//       });

//       ws.publish({
//         destination: `/pub/chat/message`,
//         body: JSON.stringify({
//           roomId: ROOMID,
//           sender: '승연',
//           type: 'ENTER',
//           userId: 'user2',
//           message: '소켓 연결 성공!',
//         }),
//       });
//     });
//   };

//   useEffect(() => {
//     connect();
//     return () => {
//       ws?.disconnect();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const negoMessage = () => {
//     if (!ws) return;
//     ws.publish({
//       destination: `/pub/chat/message`,
//       body: JSON.stringify({
//         roomId: ROOMID,
//         sender: '민섭',
//         type: 'NEGO_REQ',
//         negoPrice: 10000,
//         message: '네고해주세요',
//       }),
//     });
//   };

//   return (
//     <>
//       {message.map((item, index) => (
//         <div key={index}>
//           {item.sender} : {item.message}
//         </div>
//       ))}
//       {children}
//       <div className="w-full flex justify-between">
//         <button className="bg-mint" onClick={negoMessage}>
//           민섭 채팅 보내기
//         </button>
//       </div>
//     </>
//   );
// };
