'use client';

import BankForm from '@/components/mypage/form/bankForm/form';
import axios from 'axios';
import React from 'react';

const fetchTest = async () => {
  const res = await fetch('https://catchroom.xyz/v1/test/do');
  const data = await res.text();
  console.log(data);
  return data;
};

const fetchAxios = async () => {
  const data = await axios.get('https://catchroom.xyz/v1/test/do');
  console.log(data.data);
  return data.data;
};

const page = async () => {
  const data = await fetchTest();
  const axiosData = await fetchAxios();
  console.log(axiosData);
  return (
    <div className="flex flex-col">
      {data}
      <strong>{axiosData}</strong>
      <BankForm />
    </div>
  );
};

export default page;
