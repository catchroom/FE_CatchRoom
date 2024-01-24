import { ButtonType } from '@/types/room-info/types';
import { atom } from 'recoil';

export const activeButtonState = atom<ButtonType>({
  key: 'activeButton',
  default: 'info',
});
