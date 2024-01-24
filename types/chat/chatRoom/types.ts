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
  roomId?: string;
  userId?: number;
  time?: string;
  negoPrice?: number;
  isSeller?: boolean;
};

export type ChatRoomType = {
  chatRoomNumber: string;
  buyerId: number;
  sellerId: number;
  productId: number;
  loginUserIdentity: string;
  accommodationUrl: string;
  partnerNickName: string;
  lastChatmessageDto: ChatMessageDto;
  dealState: string;
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
