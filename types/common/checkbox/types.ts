export type CheckBoxPropsTypes = {
  id: string;
  labelText: string;
  isLabelTextBold?: boolean;
  isLabelTextUnderline?: boolean;
  setChkBoxDisabled?: boolean;
  handleSelectState?: (event: React.MouseEvent<HTMLInputElement>) => void;
  isBoxChecked?: boolean;
};
