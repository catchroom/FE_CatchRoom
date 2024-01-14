import { atom } from 'recoil';

export const isTitleStickyState = atom<boolean>({
  key: 'isTitleSticky',
  default: false,
});

export const viewerTestButton = atom<boolean>({
  key: 'testAtom',
  default: false,
});
