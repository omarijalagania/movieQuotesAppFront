import React from 'react';

type ButtonProps = {
  name: string;
  className?: string;
  onClick?: () => void;
};

const RedButton: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-rocketRed px-5 py-1 hover:bg-rocketHover rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default RedButton;
