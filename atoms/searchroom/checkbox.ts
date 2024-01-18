import { atom } from 'recoil';

export const adultCountState = atom<number>({
  key: 'adultCountState',
  default: 2,
});

export const childCountState = atom<number>({
  key: 'childCountState',
  default: 0,
});
