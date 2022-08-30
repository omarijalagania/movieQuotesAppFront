type InputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  value?: string;
  isLabel?: boolean;
  defaultValue?: string;
  disabled?: boolean;
};

export default InputProps;
