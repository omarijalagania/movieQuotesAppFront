import { RedButton } from 'components/shared';
import React from 'react';
import Image from 'next/image';
import { useTransition } from 'hooks';

const ThankYou = () => {
  const { t } = useTransition();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>{t('thankYou')}</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        {t('checkEmail')}
      </p>
      <RedButton className='text-white mt-7' name='Go to my email' />
    </div>
  );
};

export default ThankYou;
