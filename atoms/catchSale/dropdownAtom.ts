import { atom } from 'recoil';

export const dropdownState = atom<string>({
  key: 'dropdownState',
  default: '낮은 가격순',
});
