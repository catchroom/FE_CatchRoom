import React from 'react';
import Link from 'next/link';
import EmptyHeartIcon from '@/public/svgComponent/emptyHeart';
import ShoppingBagSVG from '@/public/svgComponent/shoppingBag';
import CheckSheetsSVG from '@/public/svgComponent/checkSheets';

export const IconDict = {
  heart: <EmptyHeartIcon />,
  shopping: <ShoppingBagSVG />,
  history: <CheckSheetsSVG />,
};

const BannerItem = ({
  text,
  location,
  type,
}: {
  text: string;
  location: string;
  type?: 'heart' | 'shopping' | 'history';
}) => {
  return (
    <div className="w-full">
      <Link
        href={location}
        className="flex gap-3 items-center px-2 py-3 font-medium text-t1"
      >
        {type && IconDict[type]}
        <p>{text}</p>
      </Link>
    </div>
  );
};

export default BannerItem;
