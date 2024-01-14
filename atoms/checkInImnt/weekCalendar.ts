import { atom } from 'recoil';

export const weekCalendarDate = atom<number>({
  key: 'weekCalendarDate',
  default: new Date().getDate(),
});
