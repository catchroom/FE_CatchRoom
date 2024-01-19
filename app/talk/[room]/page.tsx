import React from 'react';
import StompPage from './Room';

const page = ({ params }: { params: { room: string } }) => {
  const { room } = params;
  return (
    <div>
      page {room}
      <StompPage />
    </div>
  );
};

export default page;
