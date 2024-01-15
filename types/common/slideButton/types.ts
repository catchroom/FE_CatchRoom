export type SlideButtonPropsType = {
  isButtonActive: boolean;
  stateHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};
