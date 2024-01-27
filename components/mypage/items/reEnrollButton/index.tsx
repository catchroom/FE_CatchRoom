'use client';

import React from 'react';

const ReEnrollButton = ({
  dealState,
  fn,
}: {
  dealState: string;
  fn: () => void;
}) => {
  const reEnroll =
    dealState === 'EXPIRED' ? (
      <span
        className=" text-text-primary underline cursor-pointer"
        onClick={fn}
      >
        기한 수정
      </span>
    ) : null;
  return <>{reEnroll}</>;
};

export default ReEnrollButton;
