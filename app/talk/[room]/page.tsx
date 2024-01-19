'use client';

import React from 'react';
import StompPage from './Room';

const page = ({ params }: { params: { room: string } }) => {
  const { room } = params;

  return (
    <div>
      <StompPage>
        <>page {room}</>
      </StompPage>
      {/* Footer작성 */}
    </div>
  );
};

export const FooterComponent = () => {
  return <div className="w-full h-20 bg-mint">footer</div>;
};

export default page;
