import * as React from "react";

interface PlusBtnIconProps extends React.SVGProps<SVGSVGElement> {
  isActive: boolean;
}

const PlusBtnIcon: React.FC<PlusBtnIconProps> = ({isActive}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke={isActive? '#FF3478' : '#BCC0C6'}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default PlusBtnIcon;
