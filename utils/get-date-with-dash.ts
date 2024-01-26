export const getDateWithSlash = (dateStr: string): string => {
  const datePart = dateStr.split('T')[0];

  const [, month, day] = datePart.split('-');

  const formattedMonth = month?.padStart(2, '0');
  const formattedDay = day?.padStart(2, '0');

  return `${formattedMonth}-${formattedDay}`;
};
