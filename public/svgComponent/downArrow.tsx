import * as React from "react";

interface DownArrowIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color? : string;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = ({width=14, height=8, color='#9FA3AB'}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 20 20`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.1665 7.5L9.99984 13.3333L15.8332 7.5"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default DownArrowIcon;
