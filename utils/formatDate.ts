//yyyy-mm-dd 형식
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString()?.padStart(2, '0');
  const day = date.getDate().toString()?.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

//mm.dd(요일) 형식
export const formatToKoreanDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date
    .toLocaleString('ko-KR', { weekday: 'short' })
    .replace('.', '');

  return `${month < 10 ? `0${month}` : month}.${
    day < 10 ? `0${day}` : day
  }(${weekday})`;
};

//mm월 dd일 (요일) 형식
export const formatKoreanDate = (dateStr: string) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${month}월 ${day}일 (${dayOfWeek})`;
};
