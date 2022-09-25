import React from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import { WriteQUoteProps } from 'components';
import { useTranslate } from 'hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const WriteQuote: React.FC<WriteQUoteProps> = ({ setOpenAddQuote }) => {
  const { t } = useTranslate();
  const growSearch = useSelector((state: RootState) => state.quotes.growSearch);
  return (
    <div
      onClick={() => setOpenAddQuote(true)}
      className='relative md:h-[47px] transition-all w-[180px] md:w-[790px]'
    >
      <input
        className={`!py-2 md:text-xl ${
          growSearch ? 'md:w-[250px]' : 'w-full md:w-[778px]'
        } pl-10 rounded-md text-white bg-transparent md:bg-lightBlue placeholder-white`}
        type='text'
        disabled
        placeholder={t('writeQuote')}
      />
      <PencilAltIcon className='w-4 h-4 ml-2 absolute top-[30%] text-white' />
    </div>
  );
};

export default WriteQuote;
