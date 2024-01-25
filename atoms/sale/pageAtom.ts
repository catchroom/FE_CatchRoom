import { atom } from 'recoil';

export const isFromSalePageState = atom<boolean>({
  key: 'isFromSalePageState',
  default: false,
});
