export type HeartButtonPropsType = {
  isButtonActive: boolean;
  stateHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  whiteStroke?: boolean;
};
