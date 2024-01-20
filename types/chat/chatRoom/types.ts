export type MessageProps = {
  type?: 'ENTER' | 'TALK' | 'QUIT' | undefined;
  message?: string;
  sender?: string;
  roomId?: string;
  userId?: string;
  time?: string;
};

export type ChatRoomType = {
  chatRoomNumber: string;
  buyerId: number;
  sellerId: number;
  productId: number;
  loginUserIdentity: string;
  accommodationUrl: string;
  partnerNickName: string;
  chatMessageDto: ChatMessageDto;
};

export type ChatMessageDto = {
  type: string;
  roomId: string;
  sender: string;
  userId: number;
  message: string;
  time: string;
  userCount: number;
  negoPrice: number;
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
