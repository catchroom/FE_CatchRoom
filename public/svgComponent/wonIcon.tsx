import * as React from "react";

const WonIconSVG = ({on} : {on : boolean}) => {

  const color = on ? "#15181E" : "#9FA3AB";

  return(
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.33325 6L7.75547 18L11.6666 6L15.5777 18L18.9999 6"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3333 12.334L3 12.334"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
export default WonIconSVG;