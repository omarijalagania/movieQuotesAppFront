import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({ name, className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
