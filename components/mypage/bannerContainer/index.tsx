import React, { ReactNode } from 'react';

const BannerContainer = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-xl font-bold">{text}</h3>
      <div className="w-full flex flex-col gap-1 rounded-md overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BannerContainer;
