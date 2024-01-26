import * as React from "react";
const SendIconSVG = ({send} : {send : boolean}) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="send" clipPath="url(#clip0_389_4116)">
      <path
        id="Icon"
        d="M24.2235 13.0571L5.2761 3.60854C4.517 3.2756 4.13745 3.10913 3.90474 3.18271C3.77168 3.22479 3.65767 3.30791 3.57723 3.41754C3.57417 3.4217 3.57264 3.42379 3.54699 3.4855C3.53363 3.51766 3.50858 3.62255 3.50597 3.65728C3.50097 3.72392 3.50608 3.75472 3.51629 3.81632L4.95385 12.4896C4.97075 12.5916 4.92849 12.3366 4.97894 12.424C4.98822 12.4401 5.14552 12.6047 5.16116 12.6147C5.24621 12.6691 4.9561 12.6074 5.07214 12.632C6.19528 12.8709 16.373 13.9007 16.373 13.9007C16.373 13.9007 6.19291 15.1091 5.07175 15.3665C4.95938 15.3923 5.24031 15.3278 5.15702 15.3824C5.14148 15.3925 4.98791 15.5559 4.97871 15.572C4.92937 15.6585 4.97018 15.4119 4.95386 15.5105L3.51621 24.1993C3.50602 24.2608 3.50093 24.2916 3.50594 24.3582C3.50855 24.3929 3.53358 24.4978 3.54694 24.5299C3.57256 24.5916 3.57409 24.5937 3.57715 24.5978C3.6576 24.7075 3.77164 24.7907 3.90474 24.8328C4.13745 24.9063 4.51699 24.7399 5.27608 24.4069L5.2761 24.4069L24.2235 14.9584L24.2235 14.9584C24.9087 14.6579 25.2513 14.5076 25.3562 14.2975C25.4473 14.1151 25.4473 13.9004 25.3562 13.718C25.2513 13.5079 24.9087 13.3576 24.2235 13.0571Z"
        fill={`${send ? "#FC397A" :"#777777"}`}
        fillOpacity={send ? 1:0.3}
      />
    </g>
    <defs>
      <clipPath id="clip0_389_4116">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SendIconSVG;
