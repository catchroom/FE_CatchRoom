import { atom } from 'recoil';

export const catchState = atom<boolean>({
  key: 'catchState',
  default: false,
});

export const catchPriceState = atom<number>({
  key: 'catchPriceState',
  default: 0,
});

export const catchPercentState = atom<number>({
  key: 'catchPercentState',
  default: 0,
});
