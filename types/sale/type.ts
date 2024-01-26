export type ProductItem = {
  orderHistoryId?: number;
  discountRate: number;
  sellPrice: number;
  actualProfit: number;
  catchPrice?: number;
  endDate: string;
  introduction: string;
  isAutoCatch: boolean;
  isCatch: boolean;
  isNego: boolean;
  catchPriceStartDate?: string;
};
