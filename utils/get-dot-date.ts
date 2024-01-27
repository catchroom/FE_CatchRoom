export const getDotDate = (
  inputDate: string,
  noDay = true,
  noYear = false,
  noTime = true,
) => {
  const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  const date = new Date(inputDate);
  const dayOfWeek = week[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear().toString().substr(-2);

  let formattedDate = `${year}.${
    date.getMonth() + 1
  }.${date.getDate()} ${dayOfWeek} ${hours}:${minutes} `;

  if (noYear) {
    formattedDate = `${
      date.getMonth() + 1
    }.${date.getDate()} ${dayOfWeek} ${hours}:${minutes} `;
  }

  if (noDay) {
    formattedDate = `${
      date.getMonth() + 1
    }.${date.getDate()} ${hours}:${minutes}`;
  }

  if (noTime) {
    formattedDate = `${year}.${
      date.getMonth() + 1
    }.${date.getDate()} ${dayOfWeek}`;
  }
  return formattedDate;
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

export const decodeReviewState = (ismodify: ReviewType) => {
  switch (ismodify) {
    case 'onReview':
      return '작성한 리뷰보기';
    case 'noReview':
      return '리뷰쓰기';
    case 'deleteReview':
      return '리뷰 삭제완료';
    default:
      return '리뷰 작성기한 만료';
  }
};

export type ReviewType =
  | 'onReview'
  | 'noReview'
  | 'deleteReview'
  | 'outDatedReview';

// decodeState return type
export type StateType =
  | 'ing'
  | 'done'
  | 'expirationDate'
  | 'notForSale'
  | 'purchased';
export type decodeStateReturnType = ReturnType<typeof decodeState>;

export const formatDateWithDay = (dateStr: string): string => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthDay = `${month < 10 ? '0' + month : month}.${
    day < 10 ? '0' + day : day
  }`;
  const dayOfWeek = date
    .toLocaleDateString('ko-KR', {
      weekday: 'short',
    })
    .replace('.', '');

  return `${monthDay} (${dayOfWeek})`;
};

export const getMypageDate = (inputDate: string) => {
  // 입력된 날짜를 Date 객체로 변환
  const parsedDate = new Date(inputDate);

  // 월, 일, 요일 추출
  const month = parsedDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const day = parsedDate.getDate();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[parsedDate.getDay()];

  // 형식에 맞게 반환
  const formattedDate = `${month}월 ${day}일 (${dayOfWeek})`;

  return formattedDate;
};
