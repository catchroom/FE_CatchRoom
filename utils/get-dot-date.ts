export const getDotDate = (inputDate: string) => {
  const dateParts = inputDate.split('-');
  if (dateParts.length === 3) {
    const [year, month, day] = dateParts;
    return `${year}.${month}.${day}`;
  } else {
    return 'Invalid Date';
  }
};

export const decodeState = (state: StateType) => {
  switch (state) {
    case 'onSale':
      return '게시 만료예정';
    case 'soldOut':
      return '판매완료';
    case 'outDated':
      return '기한만료';
    case 'offSale':
      return '판매불가';
    default:
      return '판매불가';
  }
};

// decodeState return type
export type StateType = 'onSale' | 'soldOut' | 'outDated' | 'offSale';
export type decodeStateReturnType = ReturnType<typeof decodeState>;
