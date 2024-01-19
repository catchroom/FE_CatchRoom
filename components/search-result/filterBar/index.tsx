import React from 'react';
import FilterButton from '../filterButton';
import { FilterBarProps } from '@/types/search-result/FilterBar/types';

const FilterBar = ({ filters }: FilterBarProps) => {
  return (
    <div className="fixed z-20 flex gap-1 overflow-x-auto whitespace-nowrap px-5 pt-2 pb-4 mt-14 bg-surface-sub border-b border-divider-sub">
      {filters.map((filter) => (
        <FilterButton key={filter.id} label={filter.label} />
      ))}
    </div>
  );
};

export default FilterBar;
