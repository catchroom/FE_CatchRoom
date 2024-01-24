import { atom } from 'recoil';

export const isProductState = atom<boolean>({
  key: 'isProductState',
  default: false,
});
