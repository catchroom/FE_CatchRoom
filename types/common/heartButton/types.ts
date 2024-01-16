export type HeartButtonPropsType = {
  isButtonActive: boolean;
  stateHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  whiteStroke?: boolean;
  width?: 16 | 24;
  height?: 16 | 24;
};
