import React, { MouseEventHandler } from 'react';

/**
 * @function Modal - modal component 입니다.
 * @param title - 모달의 제목입니다. (필수)
 * @param content - 모달의 내용입니다. (선택)
 * @summary - 버튼은 두가지가 있습니다. cancelButton(취소 버튼), confirmButton(확인 버튼)
 * @summary - 버튼은 두가지 중 선택이 가능하며 showCancelButton, showConfirmButton을 사용해 보여줄 버튼을 선택할 수 있습니다.
 * @param onCancel - 취소 버튼을 누르면 동작하는 함수를 인자로 받습니다.
 * @param onConfirm - 확인 버튼을 누르면 동작하는 함수를 인자로 받습니다.
 * @param confirmString - 확인 버튼에 들어가는 string값을 인자로 받습니다.
 * @returns
 */

const Modal = ({
  title,
  content,
  onCancel,
  onConfirm,
  confirmString,
  cancelString = '취소',
  showCancelButton = false,
  showConfirmButton = false,
}: {
  title: string;
  content?: string;
  confirmString?: string;
  cancelString?: string;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
      data-testid="modal"
    >
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center z-[1000] max-w-[240px] w-full text-center">
        <div className="flex flex-col p-6 gap-1 ">
          <div className="font-bold text-p1 w-[200px] flex justify-center text-center whitespace-pre-wrap">
            {title}
          </div>
          {content && (
            <div className="text-p2 text-text-sub flex justify-center">
              {content}
            </div>
          )}
        </div>
        <div className="flex justify-evenly w-full">
          {showCancelButton && (
            <button
              onClick={onCancel}
              className="w-full text-main py-2 px-4 rounded-b cursor-pointer border-t border-r border-border-sub"
            >
              {cancelString}
            </button>
          )}
          {showConfirmButton && (
            <button
              onClick={onConfirm}
              className="w-full  text-main py-2 px-4 rounded-b font-bold cursor-pointer border-t border-border-sub"
            >
              {confirmString}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
