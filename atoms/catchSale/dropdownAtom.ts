import { atom } from 'recoil';

export const dropdownState = atom<string>({
  key: 'dropdownState',
  default: '낮은 가격순',
});

export const searchDropdownState = atom<string>({
  key: 'searchDropdownState',
  default: '낮은 가격순',
});
