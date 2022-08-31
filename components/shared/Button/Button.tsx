import { GoogleIcon } from 'components';
import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
  type,
  hadIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent flex justify-center items-center px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {hadIcon && <GoogleIcon />}
      {name}
    </button>
  );
};

export default Button;
