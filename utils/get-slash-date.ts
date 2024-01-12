export const getSlashDate = (checkIn: Date, checkOut: Date): string => {
  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
  };
  return `${formatDate(checkIn)}-${formatDate(checkOut)}`;
};
