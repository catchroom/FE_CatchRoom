import React from 'react';
// import { useSearchParams } from 'next/navigation';
import SendMessage from '../sendMessage';
import ReceiveMessage from '../receiveMessage';
import { MessageProps } from '@/types/chat/chatRoom/types';
// import ApproveMessage from '@/components/chat/chatRoom/approveMessage';
// import OfferMessage from '../offerMessage';
// import { CHAT_ITEMS } from '@/constants/chat';
// import DeclineMessage from '../declineMessage';

const MessageItem = ({ type, message, sender, time }: MessageProps) => {
  // const searchParams = useSearchParams();
  // const chatId = Number(searchParams?.get('chatId'));

  // 테스트를 위해 임의적으로 닉네임 적용
  const userNickname = '승연';

  if (userNickname === sender) {
    switch (type) {
      case 'TALK':
        return <SendMessage message={message} time={time} />;

      //제안하기 기능 구현시 적용
      // case 1:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12 flex  gap-x-3 items-end ml-auto mb-3">
      //         <OfferMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12 flex  gap-x-3 items-end ml-auto mb-3">
      //         <OfferMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
      // case 2:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end  mr-auto mb-3">
      //         <ApproveMessage
      //           approvePrice={approvePrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
      //         <ApproveMessage
      //           approvePrice={approvePrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
      // case 3:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
      //         <DeclineMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12 flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
      //         <DeclineMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
    }
  } else {
    switch (type) {
      case 'TALK':
        return <ReceiveMessage message={message} time={time} />;

      // case 1:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12  flex  flex-row-reverse gap-x-3 items-end mr-auto mb-3 ">
      //         <OfferMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12  flex flex-row-reverse gap-x-3 items-end mr-auto mb-3">
      //         <OfferMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
      // case 2:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12 flex gap-x-3 items-end  ml-auto mb-3">
      //         <ApproveMessage
      //           approvePrice={approvePrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
      //         <ApproveMessage
      //           approvePrice={approvePrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
      // case 3:
      //   if (userNickname === sellerNickname) {
      //     return (
      //       <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
      //         <DeclineMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={true}
      //         />
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className="w-11/12 flex gap-x-3 items-end ml-auto mb-3">
      //         <DeclineMessage
      //           offerPrice={offerPrice}
      //           date={date}
      //           isSeller={false}
      //         />
      //       </div>
      //     );
      //   }
    }
  }
};

export default MessageItem;
