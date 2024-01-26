export const chatPosition = (me: boolean, isSeller: boolean) => {
  if (me) {
    return isSeller ? 'ml-auto' : 'mr-auto';
  }
  return isSeller ? 'mr-auto' : 'ml-auto';
};
