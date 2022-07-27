import React from 'react';

const Button = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className='bg-transparent px-5 py-1 border-white border-[1px] rounded-md'
      {...props}
    >
      {props.name}
    </button>
  );
};

export default Button;
