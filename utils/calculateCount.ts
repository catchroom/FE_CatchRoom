const calculateNightCount = (check_in: string, check_out: string): number => {
  const startDate: Date = new Date(check_in);
  const endDate: Date = new Date(check_out);

  const diff: number = endDate.getTime() - startDate.getTime();

  const nightCount: number = Math.floor(diff / (1000 * 60 * 60 * 24));

  return nightCount;
};

export default calculateNightCount;
