import React from 'react';
import { InputProps } from 'components';

const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  onBlur,
  placeholder,
  className,
  id,
  value,
  isLabel,
  defaultValue,
  disabled,
  name,
}) => {
  return (
    <div className='flex my-2 flex-col'>
      {isLabel && (
        <label className='text-white mb-3' htmlFor={id}>
          {label}
          <span className='text-red-700 ml-1'>*</span>
        </label>
      )}
      <input
        name={name}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        id={id}
        className={`w-full md:w-96 border-2 p-2 rounded-md ${className}`}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
