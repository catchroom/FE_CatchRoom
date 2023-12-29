import React from 'react';

const CheckboxContainer = () => {
  return (
    <div className="flex flex-col mt-5 items-start w-[355px] gap-1">
      <div>
        <input type="checkbox" name="check" />
        <label htmlFor="check">캐치특가 자동 설정 동의</label>
      </div>
      <div>
        <input type="checkbox" name="check1" />
        <label htmlFor="check1">약관 동의</label>
      </div>
    </div>
  );
};

export default CheckboxContainer;
