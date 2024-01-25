export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  formRef: React.RefObject<HTMLFormElement>;
};
