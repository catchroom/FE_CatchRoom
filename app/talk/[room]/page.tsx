import StompPage from '@/app/stomp/sock/page';
import React from 'react';

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
