import React from 'react';

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">HELLO</h1>
        <p>THIS IS A TEST</p>
        <a href="/dashboard">안녕</a>
      </div>
    </div>
  );
};

export default page;
