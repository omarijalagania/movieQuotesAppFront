import React from 'react';

type ButtonProps = {
  name: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ name, className }) => {
  return (
    <button
      className={`bg-transparent px-5 py-1 border-white text-white border-[1px] rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
