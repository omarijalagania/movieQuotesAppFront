import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useTranslate } from 'hooks';

const Search: React.FC<any> = ({ handleSearch }) => {
  const { t } = useTranslate();

  return (
    <div className='hidden cursor-pointer text-gray-300 max-w-[20%] md:flex items-center'>
      <div className='flex  items-center'>
        <SearchIcon className='w-5 h-5 text-gray-300' />
        <input
          className={`ml-2 bg-[#181623] w-full`}
          id='search'
          name='search'
          placeholder={t('searchBy')}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default Search;
