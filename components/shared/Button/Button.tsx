import { GoogleIcon, PlusIcon } from 'components';
import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
  type,
  hadIcon,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent flex ${
        icon === 'google' ? 'justify-center' : 'justify-around'
      } items-center px-5  border-white !py-1 text-white border-[1px] rounded-md ${className}`}
    >
      {hadIcon && icon === 'google' ? (
        <GoogleIcon />
      ) : hadIcon && icon === 'plus' ? (
        <PlusIcon />
      ) : (
        ''
      )}
      {name}
    </button>
  );
};

export default Button;
