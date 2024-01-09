import { MouseEventHandler } from 'react';

export type SearchBoxIconType = {
  icon?: 'pin' | 'calendar' | 'person' | 'house';
  placeholder?: string;
  onClickFunc?: MouseEventHandler<HTMLButtonElement>;
};
