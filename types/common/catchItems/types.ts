export type catchItems = {
  productId?: number;
  image?: string;
  accommodationName: string;
  roomName: string;
  resDate: string;
  catchType: boolean;
  originalPrice: number;
  discountRate: number;
  sellPrice: number;
  isDelete?: boolean;
  isHeart?: boolean;
  heartState?: boolean;
  pageHandler?: () => void;
  heartBtnHandler?: () => void;
  deleteBtnHandler?: () => void;
  latitude?: string;
  longitude?: string;
};
