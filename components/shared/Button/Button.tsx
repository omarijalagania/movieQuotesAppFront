import { GoogleIcon } from 'components';
import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
  type,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent flex justify-center items-center px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {icon ? <GoogleIcon icon={icon} /> : null}
      {name}
    </button>
  );
};

export default Button;
