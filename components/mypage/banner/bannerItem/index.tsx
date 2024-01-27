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
  bottom = false,
}: {
  text: string;
  location: string;
  type?: 'heart' | 'shopping' | 'history';
  bottom?: boolean;
}) => {
  const bannerTop =
    'flex gap-3 items-center px-2 py-[10px] font-medium text-t1';

  const bannerBottom = 'flex gap-3 items-center px-2 py-[10px] text-t2 h-10';

  return (
    <div className="w-full">
      <Link href={location} className={bottom ? bannerBottom : bannerTop}>
        {type && IconDict[type]}
        <p>{text}</p>
      </Link>
    </div>
  );
};

export default BannerItem;
