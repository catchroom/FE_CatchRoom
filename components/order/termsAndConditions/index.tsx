import { TermsAndConditionsProps } from '@/types/order/termsAndConditions/type';
import React from 'react';

const TermsAndConditions = ({ label }: TermsAndConditionsProps) => {
  return (
    <div className="flex items-center mt-8 text-p2 font-bold text-gray-1000">
      <label>
        <input type="checkbox" /> {label}
      </label>
    </div>
  );
};

export default TermsAndConditions;
