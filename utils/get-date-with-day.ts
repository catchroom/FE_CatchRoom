export const getDateWithDay = (date: Date | undefined): string => {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  if (date !== undefined) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = weekdays[date.getDay()];

    return `${month}월 ${day}일 (${weekday})`;
  }
  return '판매일을 선택해주세요';
};
