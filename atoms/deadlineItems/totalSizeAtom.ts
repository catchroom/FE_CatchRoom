import { atom } from 'recoil';

export const deadlineItemTotalSize = atom<number>({
  key: 'deadlineItemTotalSize',
  default: 0,
});
