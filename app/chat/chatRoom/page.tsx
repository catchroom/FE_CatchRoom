// 'use client';
// import React, { useState } from 'react';
// import ProductInfo from '@/components/chat/chatRoom/productInfo';
// import Send from '@/components/chat/chatRoom/send';
// import Date from '@/components/chat/chatRoom/date';
// import Header from '@/components/common/header';
// import MessageList from '@/components/chat/chatRoom/messageList';
// import WebSocketConnection from '@/components/chat/chatRoom/WebSocketConnection/WebSocketConnection';
// import { MessageProps } from '@/types/chat/chatRoom/types';
// import { loadedChatMessage } from '@/api/chat/api';

// const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

// const Page = () => {
//   const [message, setMessage] = useState<MessageProps[]>([]);

//   // // 채팅방 내부 정보 불러오기
//   // const ChatInfo = async () => {
//   //   try {
//   //     const result = await loadedChatInfo(ROOMID);
//   //     console.log(result);
//   //   } catch (error) {
//   //     console.error('failed:', error);
//   //   }
//   // };
//   // ChatInfo();

//   //채팅 내용 불러오기
//   const chatMessage = async () => {
//     try {
//       const result = await loadedChatMessage(ROOMID);
//       console.log(result);
//     } catch (error) {
//       console.error('failed:', error);
//     }
//   };
//   chatMessage();

//   const onMessageReceived = (newMessage: MessageProps) => {
//     setMessage((prev) => [...prev, newMessage]);
//   };

//   const { sendMessage } = WebSocketConnection({ onMessageReceived });

//   const handleSendMessage = (messageText: string) => {
//     sendMessage(messageText);
//   };

//   return (
//     <>
//       <Header title="닉네임" showBackButton />
//       <div className="flex flex-col ">
//         <ProductInfo />
//         <div className="bg-gray-100 overflow-auto flex flex-col px-5 h-screen">
//           <Date />
//           <MessageList messages={message} />
//         </div>
//         <Send onSendMessage={handleSendMessage} />
//       </div>
//     </>
//   );
// };

// export default Page;
