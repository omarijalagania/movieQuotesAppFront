import React from 'react';

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
  value?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  placeholder,
  className,
  id,
  value,
}) => {
  return (
    <div className='flex my-2 flex-col'>
      <label className='text-white mb-3' htmlFor={id}>
        {label}
        <span className='text-red-700 ml-1'>*</span>
      </label>
      <input
        value={value}
        id={id}
        className={`w-full md:w-96 p-2 rounded-md ${className}`}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
