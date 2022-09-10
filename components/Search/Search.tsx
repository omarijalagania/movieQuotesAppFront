import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from 'hooks';
import { changeSearchWidth, RootState } from 'state';
import { useSearch, useOutsideSearch } from 'components';

const Search: React.FC<any> = ({ handleSearch }) => {
  const { t } = useTranslate();
  const { handleClickOutside } = useSearch();
  const dispatch = useDispatch();
  const growSearch = useSelector((state: RootState) => state.quotes.growSearch);
  const ref = useOutsideSearch(handleClickOutside);

  return (
    <div
      onClick={() => dispatch(changeSearchWidth(!growSearch))}
      className={`hidden cursor-pointer text-gray-300  ${
        growSearch ? 'w-[40%]' : 'w-[20%]'
      } md:flex items-center`}
    >
      <div className='flex  items-center'>
        <SearchIcon className='w-5 h-5 text-gray-300' />
        <input
          ref={ref}
          className={`ml-2 bg-[#181623] ${
            growSearch ? 'md:w-[400px]' : 'w-full'
          }`}
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
