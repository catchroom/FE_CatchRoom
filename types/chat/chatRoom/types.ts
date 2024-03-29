export type MessagePropsNoPartial = {
  type:
    | 'ENTER'
    | 'TALK'
    | 'QUIT'
    | 'NEGO_REQ'
    | 'NEGO_ALLOW'
    | 'NEGO_DENIED'
    | 'DELETE'
    | undefined;
  message: string;
  roomId: string;
  userId: number;
  time: string;
  negoPrice: number;
  isSeller?: boolean;
  me?: boolean;
  accept: (price: number) => void;
  deny: (price: number) => void;
};

export type MessageItemType = {
  negoPrice: number;
  time: string;
  isSeller: boolean;
};

export type MessageItemProps = Omit<MessagePropsNoPartial, 'accept' | 'deny'>;

export type MessageProps = Partial<MessagePropsNoPartial>;

export type ChatRoomType = {
  chatRoomNumber: string;
  buyerId: number;
  sellerId: number;
  productId: number;
  accommodationName: string;
  sellPrice: number;
  loginUserIdentity: string;
  accommodationUrl: string;
  partnerNickName: string;
  dealState: string;
  buyerState: string;
  sellerState: string;
  isNego: boolean;
  lastChatmessageDto: ChatMessageDto;
};

export type ChatInitialInfo = Omit<ChatRoomType, 'lastChatmessageDto'>;

export type ChatMessageDto = {
  type: string;
  roomId: string;
  userId: number;
  message: string;
  time: string;
  userCount: number;
  negoPrice: number;
};
