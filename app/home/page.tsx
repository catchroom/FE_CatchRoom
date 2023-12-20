import { fetchText } from '@/api/fetch-text';
import React from 'react';

const page = async () => {
  const data = await fetchText();
  const envTest = process.env.QUERY_PATH;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">HELLO</h1>
        <p>THIS IS A TEST</p>
        <p>{data.message}</p>
        <p>{envTest}</p>
      </div>
    </div>
  );
};

export default page;
