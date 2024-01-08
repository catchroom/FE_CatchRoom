import { MouseEventHandler } from 'react';

export type SelectBoxIconType = {
  icon?: 'pin' | 'calendar' | 'person' | 'house';
  placeholder?: string;
  onClickFunc?: MouseEventHandler<HTMLButtonElement>;
};
