import React from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';

type Props = {
  setOpenAddQuote: (open: boolean) => void;
};

const WriteQuote = ({ setOpenAddQuote }: Props) => {
  return (
    <div
      onClick={() => setOpenAddQuote(true)}
      className='relative w-full md:w-[88%]'
    >
      <input
        className='py-2 w-[100%] pl-10 rounded-md text-white bg-lightBlue placeholder-white'
        type='text'
        placeholder='Write new quote'
      />
      <PencilAltIcon className='w-4 h-4 ml-2 absolute top-[30%] text-white' />
    </div>
  );
};

export default WriteQuote;
