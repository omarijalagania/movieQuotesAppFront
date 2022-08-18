import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useTranslate } from 'hooks';
const Search: React.FC = () => {
  const { t } = useTranslate();
  return (
    <div className='hidden text-gray-300 max-w-[20%] md:flex items-center'>
      <SearchIcon className='w-5 h-5 text-gray-300' />
      <p className='ml-2'>{t('searchBy')}</p>
    </div>
  );
};

export default Search;
