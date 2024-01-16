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

export const decodeState = (state: StateType, date?: string) => {
  switch (state) {
    case 'ing':
      return `게시 만료일 ~ ${date}`;
    case 'done':
      return `판매일 ${date}`;
    case 'expirationDate':
      return '게시기한 만료';
    case 'notForSale':
      return '체크인 만료';
    default:
      return `구매일 ${date}`;
  }
};

// decodeState return type
export type StateType =
  | 'ing'
  | 'done'
  | 'expirationDate'
  | 'notForSale'
  | 'purchased';
export type decodeStateReturnType = ReturnType<typeof decodeState>;
