import React from 'react';
import DownArrowComponent from '@/public/svgComponent/downArrow';
import { FilterButtonProps } from '@/types/search-result/FilterButton/types';

const FilterButton = ({ label }: FilterButtonProps) => {
  return (
    <div className="inline-flex items-center gap-1">
      <button className="flex items-center py-2 px-3 gap-1 border border-border-sub rounded-[20px] bg-white text-t2 ">
        {label}
        <DownArrowComponent width={12} height={7} />
      </button>
    </div>
  );
};

export default FilterButton;
