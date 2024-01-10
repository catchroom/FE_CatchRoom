export const getDotDate = (inputDate: string, noDay = false) => {
  const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  const dayOfWeek = week[new Date(inputDate).getDay()];
  const dateParts = inputDate.split('-');
  if (dateParts.length === 3) {
    const [month, day] = dateParts.slice(1);
    return `${month}.${day} ${noDay ? '' : dayOfWeek}`;
  } else {
    return 'Invalid Date';
  }
};

export const decodeState = (state: StateType) => {
  switch (state) {
    case 'ing':
      return '게시 만료예정';
    case 'soldOut':
      return '판매완료';
    case 'outDated':
      return '기한만료';
    case 'offSale':
      return '판매불가';
    default:
      return '상세보기';
  }
};

// decodeState return type
export type StateType =
  | 'ing'
  | 'soldOut'
  | 'outDated'
  | 'offSale'
  | 'purchased';
export type decodeStateReturnType = ReturnType<typeof decodeState>;
