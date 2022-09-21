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
      className={`hidden cursor-pointer md:h-[50px] transition-all text-gray-300  ${
        growSearch ? 'flex-grow' : 'w-[150px]'
      } md:flex  items-center`}
    >
      <div className='flex transition-all  items-center'>
        <SearchIcon className='w-5 h-5  text-gray-300' />
        <input
          ref={ref}
          className={`ml-2 bg-[#181623] md:h-[50px] outline-none ${
            growSearch
              ? 'md:w-[400px] border-b-[1px] border-gray-700 py-2 mr-4'
              : 'w-full'
          }`}
          id='search'
          name='search'
          placeholder={growSearch ? t('searchText') : t('searchBy')}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default Search;
