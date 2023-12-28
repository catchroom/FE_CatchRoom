import React from 'react';
import Link from 'next/link';
import BannerIcon from '../bannerIcon';

const BannerItem = ({ text, location }: { text: string; location: string }) => {
  return (
    <div className="w-full bg-gray-200">
      <Link href={location} className="flex justify-between items-center p-3">
        <p>{text}</p>
        <BannerIcon />
      </Link>
    </div>
  );
};

export default BannerItem;
