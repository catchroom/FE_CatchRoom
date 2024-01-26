export type OrderData = {
  productId: number;
  userInfo: {
    userName: string;
    userPhoneNumber: string;
  };
  paymentInfo: {
    sellPrice: number;
    price: number;
  };
  paymentMethod: string | undefined;
};
