import React, { ReactNode } from 'react';

const PrivacyContainer = ({
  children,
  title,
  subTitle,
}: {
  children: ReactNode;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-1 border-b border-divider-sub pb-5 font-semibold text-t2">
        <h3>{title}</h3>
        <p className="text-text-primary">{subTitle && subTitle}</p>
      </div>
      <div className="w-full flex flex-col pt-5 gap-5">{children}</div>
    </div>
  );
};

export default PrivacyContainer;
