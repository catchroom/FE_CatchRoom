import * as React from "react";
const XSymbolIcon = ({w=18, y=17, placeholder} : {w?:number, y?:number, placeholder? : boolean}) => (
  <svg
    width={`${w}px`}
    height={`${y}px`}
    viewBox={`0 0 ${w} ${y}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 1L1 16" stroke={`${placeholder ? 'gray' : 'black'}`} />
    <path d="M17 16L1 1" stroke={`${placeholder ? 'gray' : 'black'}`} />
  </svg>
);
export default XSymbolIcon;
