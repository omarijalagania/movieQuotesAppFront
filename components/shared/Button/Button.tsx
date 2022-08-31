import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
  type,
  hasIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent flex justify-center items-center px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {hasIcon && (
        <img className='w-5 h-4 mr-2' src='/assets/google.svg' alt='icon' />
      )}
      {name}
    </button>
  );
};

export default Button;
