import React from 'react';

type ButtonProps = {
  name: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
