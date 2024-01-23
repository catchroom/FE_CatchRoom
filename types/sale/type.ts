export type ProductItem = {
  id: number;
  end_date: Date;
  sell_price: number;
  actual_profit: number;
  rate: number;
  is_catch: boolean;
  is_auto_catch: boolean;
  catch_price: number;
  catch_price_start_date: Date;
  introduction: string;
  is_nego: boolean;
};
