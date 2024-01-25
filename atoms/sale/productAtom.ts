import { atom } from 'recoil';

export const isProductState = atom<boolean>({
  key: 'isProductState',
  default: false,
});

export const isNegoState = atom<boolean>({
  key: 'isNegoState',
  default: false,
});

export const sellerContentState = atom<string>({
  key: 'sellerContentState',
  default: '',
});
