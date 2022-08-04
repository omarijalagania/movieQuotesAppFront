import React from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
const WriteQuote = () => {
  return (
    <div className='w-[80%] relative'>
      <input
        className='w-full py-2 pl-10 rounded-md text-white bg-lightBlue placeholder-white'
        type='text'
        placeholder='Write new quote'
      />
      <PencilAltIcon className='w-4 h-4 ml-2 absolute top-[30%] text-white' />
    </div>
  );
};

export default WriteQuote;
