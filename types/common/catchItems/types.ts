export type catchItems = {
  id?: number;
  roomName: string;
  roomType: string;
  resDate: string;
  oldPrice: number;
  discount: number;
  isDelete?: boolean;
  isHeart?: boolean;
  heartState?: boolean;
  pageHandler?: () => void;
  heartBtnHandler?: () => void;
  deleteBtnHandler?: () => void;
  location?: string;
};
