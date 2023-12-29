type SelectBoxType = {
  icon: 'pin' | 'calendar' | 'person' | 'house';
  placeholder: string;
};

type SearchDefaultType = {
  props: SelectBoxType[];
};

export const SEARCH_DEFAULT: SearchDefaultType = {
  props: [
    {
      icon: 'pin',
      placeholder: '지역',
    },
    {
      icon: 'calendar',
      placeholder: '날짜',
    },
    {
      icon: 'person',
      placeholder: '인원 수',
    },
    {
      icon: 'house',
      placeholder: '숙소 종류',
    },
  ],
};
