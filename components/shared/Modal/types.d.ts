type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  classes?: string;
  dialogClass?: string;
};

export default ModalProps;
