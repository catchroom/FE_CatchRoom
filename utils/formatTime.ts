export const formatTime = (time: string | null | undefined): string => {
  if (!time) return '';

  return time.slice(11, 16);
};
