export const getDotDate = (inputDate: string) => {
  const dateParts = inputDate.split('-');
  if (dateParts.length === 3) {
    const [year, month, day] = dateParts;
    return `${year}.${month}.${day}`;
  } else {
    return 'Invalid Date';
  }
};
