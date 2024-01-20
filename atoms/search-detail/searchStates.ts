import { REGION_NAMES, ROOM_CATEGORIES } from '@/constants/search-detail';
import { DateRange } from 'react-day-picker';
import { atom } from 'recoil';

// 1. 지역
export const isRegionCheckedState = atom<boolean>({
  key: 'isRegionCheckedState',
  default: true,
});
export const regionIndex = atom<number[]>({
  key: 'regionIndex',
  default: Array(REGION_NAMES.length)
    .fill(0)
    .map((_, index) => index),
});
export const regionBooleanIndex = atom<boolean[]>({
  key: 'regionBooleanIndex',
  default: Array(REGION_NAMES.length).fill(true),
});

// 2. 날짜
export const isAllDayCheckedState = atom<boolean>({
  key: 'isAllDayCheckedState',
  default: true,
});
export const rangeDate = atom<DateRange | undefined>({
  key: 'rangeDate',
  default: {
    from: undefined,
    to: undefined,
  },
});

// 3. 숙소유형 전체선택
export const isRoomCheckedState = atom<boolean>({
  key: 'isRoomCheckedState',
  default: true,
});
export const roomIndex = atom<number[]>({
  key: 'roomIndex',
  default: Array(ROOM_CATEGORIES.length)
    .fill(0)
    .map((_, index) => index),
});
export const roomBooleanIndex = atom<boolean[]>({
  key: 'roomBooleanIndex',
  default: Array(ROOM_CATEGORIES.length).fill(true),
});

// 4. 인원수 카운터
export const adultCountState = atom<number>({
  key: 'adultCountState',
  default: 2,
});
export const childCountState = atom<number>({
  key: 'childCountState',
  default: 0,
});
