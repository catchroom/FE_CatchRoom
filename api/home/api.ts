const ACCESSTOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiaHllbWluIiwicGhvbmVOdW1iZXIiOiIwMTAtMTExMS0xMTExIiwibmlja05hbWUiOiJoeWVtaW4iLCJlbWFpbCI6Imh5ZW01MDE5QGVtYWlsLmNvbSIsImlzcyI6ImNhdGNocm9vbSIsImlhdCI6MTcwNTkwNzg3MSwiZXhwIjoxNzA1OTA5NjcwfQ.QMZXQFcFR7pHOrrr8t6vYOUzSJ_htGuPyTpQmewsUPK4h6-qNBgE0UfAAIazJ3g4sWFAJ0bRJd8tycqoQRrQRw';

export const getSalesHistory = async () => {
  const res = await fetch(
    'https://catchroom.xyz/v1/orderhistory/yanolja/product/candidate',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESSTOKEN}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
