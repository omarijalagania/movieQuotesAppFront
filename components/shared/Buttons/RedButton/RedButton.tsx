import React from 'react';

type ButtonProps = {
  name: string;
  className?: string;
};

const RedButton: React.FC<ButtonProps> = ({ name, className }) => {
  return (
    <button
      className={`bg-rocketRed px-5 py-1 hover:bg-rocketHover rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default RedButton;
