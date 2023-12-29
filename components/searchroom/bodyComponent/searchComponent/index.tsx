import SelectBoxButton from '@/components/common/selectBoxButton';
import { SEARCH_DEFAULT } from '@/constants/serchpage';
import React from 'react';

const SearchComponent = () => {
  return (
    <div className=" w-full flex flex-col pt-8 p-4 items-center bg-white text-xl">
      {SEARCH_DEFAULT.props.map((prop) => {
        return (
          <SelectBoxButton
            key={prop.icon}
            icon={prop.icon}
            placeholder={prop.placeholder}
          />
        );
      })}
    </div>
  );
};

export default SearchComponent;
