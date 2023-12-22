'use client';

import axios from 'axios';

export const fetchApiTest = async () => {
  const data = await axios.get('/api/do');
  return data;
};
