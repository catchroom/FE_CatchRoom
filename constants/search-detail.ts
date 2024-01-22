export type SearchBtnType = {
  icon?: 'pin' | 'calendar' | 'person' | 'house';
  placeholder: string;
  BottomSheetTitle: string;
  BottomSheetBtns?: string[];
};

type SearchBtnTypes = {
  props: SearchBtnType[];
};

export const SEARCH_DEFAULT: SearchBtnTypes = {
  props: [
    {
      icon: 'pin',
      placeholder: '지역',
      BottomSheetTitle: '지역을 선택해주세요',
    },
    {
      icon: 'calendar',
      placeholder: '날짜',
      BottomSheetTitle: '날짜를 선택해주세요',
    },
    {
      icon: 'house',
      placeholder: '숙소 종류',
      BottomSheetTitle: '숙소 유형을 선택해주세요',
    },
    {
      icon: 'person',
      placeholder: '인원 수',
      BottomSheetTitle: '인원수를 선택해주세요',
    },
  ],
};

export const REGION_NAMES = [
  '서울',
  '경기',
  '인천',
  '강원',
  '제주',
  '대전',
  '충북',
  '충남/세종',
  '부산',
  '울산',
  '경남',
  '대구',
  '경북',
  '광주',
  '전남',
  '전주/전북',
];
export const ROOM_CATEGORIES = ['호텔', '리조트', '펜션', '모텔', '기타'];
