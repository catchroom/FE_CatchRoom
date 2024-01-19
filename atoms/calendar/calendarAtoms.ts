import { DateRange } from 'react-day-picker';
import { atom } from 'recoil';

export const singleDate = atom<Date | undefined>({
  key: 'singleDate',
  default: undefined,
});

export const rangeDate = atom<DateRange | undefined>({
  key: 'rangeDate',
  default: {
    from: undefined,
    to: undefined,
  },
});
