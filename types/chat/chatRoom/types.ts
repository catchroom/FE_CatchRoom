export type MessageProps = {
  type?: 'ENTER' | 'TALK' | 'QUIT' | undefined;
  message?: string;
  sender?: string;
  roomId?: string;
  userId?: string;
  time?: string;
};

// export type MessageProps = {
//   messageType?: number;
//   sellerNickname?: string;
//   sendUserNickname?: string;
//   isSeller?: boolean;
//   isSendUser?: boolean;
//   content?: string;
//   date?: string;
//   offerPrice?: string;
//   approvePrice?: string;
// };
