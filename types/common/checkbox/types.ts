export type CheckBoxPropsTypes = {
  id: string;
  labelText: string;
  isBoxChecked: boolean;
  isLabelTextBold?: boolean;
  isLabelTextUnderline?: boolean;
  setChkBoxDisabled?: boolean;
  handleSelectState?: (event: React.MouseEvent<HTMLInputElement>) => void;
};
