export type MessageProps = {
  type?:
    | 'ENTER'
    | 'TALK'
    | 'QUIT'
    | 'NEGO_REQ'
    | 'NEGO_ALLOW'
    | 'NEGO_DENIED'
    | undefined;
  message?: string;
  sender?: string;
  roomId?: string;
  userId?: string;
  time?: string;
  negoPrice?: number;
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
