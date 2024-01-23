import * as React from "react";
const XSymbolIcon = ({w=18, y=17} : {w?:number, y?:number}) => (
  <svg
    width={w}
    height={y}
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 1L1 16" stroke="black" />
    <path d="M17 16L1 1" stroke="black" />
  </svg>
);
export default XSymbolIcon;
