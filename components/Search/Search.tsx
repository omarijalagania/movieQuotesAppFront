import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
const Search = () => {
  return (
    <div className='text-gray-300 max-w-[20%] flex items-center'>
      <SearchIcon className='w-5 h-5 text-gray-300' />
      <p className='ml-2'>Search by</p>
    </div>
  );
};

export default Search;
