import React, { ReactNode } from 'react';

const BannerContainer = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <section className="w-full flex flex-col gap-3">
      <h3 className="text-xl font-bold">{text}</h3>
      <div className="w-full flex flex-col gap-1 rounded-md overflow-hidden">
        {children}
      </div>
    </section>
  );
};

export default BannerContainer;
