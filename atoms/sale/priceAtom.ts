import { atom } from 'recoil';

export const productPriceState = atom<number>({
  key: 'productPriceState',
  default: 0,
});

export const priceState = atom<number>({
  key: 'priceState',
  default: 0,
});

export const percentState = atom<number>({
  key: 'percentState',
  default: 0,
});

export const totalPriceState = atom<number>({
  key: 'totalPriceState',
  default: 0,
});
