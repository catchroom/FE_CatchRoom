import { atom } from 'recoil';

export const DAY_TIME = ['오전', '오후'];

export const timeState = atom<string>({
  key: 'timeState',
  default: DAY_TIME[1],
});

export const hourState = atom<number>({
  key: 'hourState',
  default: 11,
});

export const minuteState = atom<number>({
  key: 'minuteState',
  default: 59,
});
