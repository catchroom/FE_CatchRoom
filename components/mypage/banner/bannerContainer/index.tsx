import React, { ReactNode } from 'react';

const BannerContainer = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <section className="w-full flex flex-col gap-3 ">
      <h3 className="text-t2 font-semibold">{text}</h3>
      <div className="w-full flex flex-col overflow-hidden">{children}</div>
    </section>
  );
};

export default BannerContainer;
