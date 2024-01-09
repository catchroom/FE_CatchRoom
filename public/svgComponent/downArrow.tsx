import * as React from "react";

interface DownArrowIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = ({width=14, height=8}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 14 8`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 0.999999L7 7L1 1"
      stroke="black"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default DownArrowIcon;
