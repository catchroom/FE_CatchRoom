import { atom } from 'recoil';

export const priceState = atom<number>({
  key: 'priceState',
  default: 0,
});

export const percentState = atom<number>({
  key: 'percentState',
  default: 0,
});
