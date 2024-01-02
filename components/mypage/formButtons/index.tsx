import React from 'react';

const FormButtons = ({ click, fn }: { click: boolean; fn: () => void }) => {
  if (click) {
    return (
      <div className="w-full flex flex-col">
        <button type="submit" className="bg-primary p-3">
          확인
        </button>
        <button type="button" onClick={fn} className="bg-primary p-3">
          취소
        </button>
      </div>
    );
  }
  return <div>index</div>;
};

export default FormButtons;
