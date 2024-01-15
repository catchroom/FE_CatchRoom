import { atom } from 'recoil';

export const weekCalendarDate = atom<Date>({
  key: 'weekCalendarDate',
  default: new Date(),
});
