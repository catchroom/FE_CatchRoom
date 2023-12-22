import { fetchText } from '@/api/fetch-text';
import React from 'react';

const page = async () => {
  const dataTest = await fetchText();
  console.log(dataTest);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-center bg-secondary p-3 md:bg-quinary md:flex-row lg:bg-senary hover:bg-tertiary hover:animate-pulse">
        <h1 className="text-5xl font-bold">HELLO</h1>
        <p>THIS IS A TEST</p>
      </div>
    </div>
  );
};

export default page;
