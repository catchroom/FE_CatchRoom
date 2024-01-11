import React from 'react';

type PropsType = {
  percent?: number;
};
const Discount = ({ percent }: PropsType) => {
  return (
    <div className="px-2 py-1 bg-surface-primary rounded  ">
      <p className="text-text-primary text-p2 font-bold">
        {percent}% 할인한 금액
      </p>
    </div>
  );
};

export default Discount;
