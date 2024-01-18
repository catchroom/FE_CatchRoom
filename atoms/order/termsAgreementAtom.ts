import { atom } from 'recoil';

export const selectedTermsState = atom<string[]>({
  key: 'selectedTermsState',
  default: [],
});
