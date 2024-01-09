import Link from 'next/link';
import React from 'react';

const AccountButton = ({
  text,
  location,
}: {
  text: string;
  location: string;
}) => {
  return (
    <Link
      href={location}
      className="w-1/2 flex justify-center text-t2 font-medium"
    >
      <div className="text-p2">{text}</div>
    </Link>
  );
};

export default AccountButton;
