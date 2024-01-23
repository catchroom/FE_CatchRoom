import { apiClient } from '../user/apiClient';

export const getSaleProduct = async (id: number) => {
  const res = await apiClient.get(`/v1/sales/yanolja/product/detail?id=${id}`);
  return res.data;
};

export const postSaleProduct = async (
  //뮤테이션 훅으로 바꿔보기..?
  id: number,
  end_date: Date,
  sell_price: number,
  actual_profit: number,
  rate: number,
  is_catch: boolean,
  is_auto_catch: boolean,
  catch_price: number,
  catch_price_start_date: Date,
  introduction: string,
  is_nego: boolean,
) => {
  const res = await apiClient.post(`/v1/sales/product`, {
    id,
    end_date,
    sell_price,
    actual_profit,
    rate,
    is_catch,
    is_auto_catch,
    catch_price,
    introduction,
    is_nego,
  });
  return res.data;
};
