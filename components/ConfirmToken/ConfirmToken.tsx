import { RedButton } from 'components/shared';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const ConfirmToken = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>{t('thankYou')}</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        {t('accountActivated')}
      </p>
      <RedButton className='text-white w-72 mt-7' name='Go to my feed' />
    </div>
  );
};

export default ConfirmToken;
