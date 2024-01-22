import { salesItem } from '@/types/home/types';
import { atom } from 'recoil';
export const salesItemsState = atom<salesItem[] | null>({
  key: 'salesItemsState',
  default: null,
});

export const isSuccessState = atom<boolean>({
  key: 'isSuccessState',
  default: false,
});
