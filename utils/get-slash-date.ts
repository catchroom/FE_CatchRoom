export const getSlashDate = (
  checkInStr: string,
  checkOutStr: string,
): string => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작합니다.
    const day = date.getDate(); // getDate()는 1부터 시작합니다.
    return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
  };

  return `${formatDate(checkInStr)}-${formatDate(checkOutStr)}`;
};
