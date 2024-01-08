export type ButtonProps = {
  label: string;
  theme: string;
  onClick: () => void;
};

export type Theme = {
  [key: string]: {
    backgroundColor: string;
    color: string;
    borderColor?: string;
    fontWeight?: string;
    width: string;
  };
};
