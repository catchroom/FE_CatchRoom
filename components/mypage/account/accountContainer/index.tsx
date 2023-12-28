import React, { ReactNode } from 'react';

const AccountContainer = ({
  name,
  email,
  children,
}: {
  name: string;
  email: string;
  children: ReactNode;
}) => {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="left">
        <strong className="text-lg font-bold">{name}</strong>
        <p>{email}</p>
      </div>
      <div className="right">{children}</div>
    </section>
  );
};

export default AccountContainer;
