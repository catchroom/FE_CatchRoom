import { atom } from 'recoil';

export const dropdownState = atom<string>({
  key: 'dropdownState',
  default: '할인율 높은순',
});

export const searchDropdownState = atom<string>({
  key: 'searchDropdownState',
  default: '할인율 높은순',
});
