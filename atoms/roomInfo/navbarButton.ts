import { ButtonType } from '@/types/roomInfo/types';
import { atom } from 'recoil';

export const activeButtonState = atom<ButtonType>({
  key: 'activeButton',
  default: 'info',
});
