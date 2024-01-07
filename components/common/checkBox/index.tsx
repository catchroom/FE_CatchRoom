import React, { useState } from 'react';
import ChkBoxDisabledIcon from '@/public/svgComponent/checkbox/disabled';
import ChkBoxDefaultIcon from '@/public/svgComponent/checkbox/default';
import ChkBoxSelectedIcon from '@/public/svgComponent/checkbox/selected';
import { CheckBoxPropsTypes } from '@/types/common/checkbox/types';

/**
 * @function CheckBoxComponent - 체크박스로 사용되는 컴포넌트입니다. 체크박스와 label이 포함되어 있습니다.
 * @summary - 라벨을 클릭했을때도 체크박스가 선택되도록 만들었습니다.
 * @param id - 체크박스와 라벨의 식별을 위한 id값입니다. `ex) selectAll, agreeTerms 등 유니크한 이름으로 자유롭게 지정이 가능합니다.` (필수)
 * @param labelText -체크박스 우측에 표시되는 라벨입니다. (필수)
 * @param isLabelTextBold - boolean 값으로 라벨의 텍스트 굵기 유무를 결정할 수 있습니다. `기본값: font-medium` (선택)
 * @param isLabelTextUnderline - boolean 값으로 라벨 텍스트에 밑줄 효과를 줄 수 있습니다. (선택)
 * @param isBoxChecked - 별도로 체크박스의 체크 State를 커스텀하고 싶은 경우, boolean 값으로 전달할 수 있습니다. `기본값: false` (선택)
 * @param handleSelectState - 전체선택 기능을 위해 핸들러 함수를 전달하는 용도로 사용할 수 있습니다. (선택)
 * @param setChkBoxDisabled - boolean 값으로 체크박스의 disabled를 활성화할 수 있습니다. (선택)
 * @returns
 */

const CheckBoxComponent = ({
  id,
  labelText,
  isLabelTextBold = false,
  isLabelTextUnderline = false,
  isBoxChecked = false,
  handleSelectState,
  setChkBoxDisabled,
}: CheckBoxPropsTypes) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const inputStyle = 'absolute w-[1.5rem] h-[1.5rem] opacity-0';

  return (
    <div className="flex items-start w-full h-[1.5rem]">
      {setChkBoxDisabled ? (
        <>
          <ChkBoxDisabledIcon />
          <input type="checkbox" name={id} className={inputStyle} disabled />
        </>
      ) : (
        <>
          {isChecked || isBoxChecked ? (
            <ChkBoxSelectedIcon />
          ) : (
            <ChkBoxDefaultIcon />
          )}
          <input
            type="checkbox"
            id={id}
            name={id}
            className={inputStyle}
            onChange={handleCheckboxChange}
            onClick={handleSelectState}
          />
        </>
      )}
      <input
        type="checkbox"
        id={id}
        name={id}
        className={inputStyle}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className={`${isLabelTextBold ? 'font-semibold' : 'font-medium'} 
        ${isLabelTextUnderline ? 'underline' : ''} ml-2 text-t2`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
