import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
const Search = () => {
  return (
    <div className='text-white flex justify-center ml-3 items-center'>
      <SearchIcon className='w-5 h-5 text-white' />
      <p className='pl-2 text-md'>Search by</p>
    </div>
  );
};

export default Search;
