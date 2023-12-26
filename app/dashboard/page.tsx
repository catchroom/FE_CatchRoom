'use client';

import { fetchApiTest } from '@/api/fetch-api-test';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {
  const { data } = useQuery({
    queryKey: ['api-test'],
    queryFn: fetchApiTest,
  });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-primary">
      <p className=" text-secondary text-xl font-bold">{data && data.data}</p>
    </div>
  );
};

export default Page;
