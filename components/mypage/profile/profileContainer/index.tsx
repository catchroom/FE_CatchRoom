import React, { ReactNode } from 'react';

const ProfileContainer = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <section className="w-full flex justify-between items-center py-3">
      <div className="left">
        <strong className="text-t1 font-bold">{name} 님</strong>
      </div>
      <div className="right">{children}</div>
    </section>
  );
};

export default ProfileContainer;
