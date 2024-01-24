export const formatCurrency = (data: number | null | undefined): string => {
  if (!data) return '';

  return data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
