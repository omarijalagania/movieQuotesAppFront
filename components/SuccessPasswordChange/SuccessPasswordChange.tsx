import React from 'react';
import Image from 'next/image';
import { RedButton } from 'components';
import { useTranslate } from 'hooks';

const SuccessPasswordChange: React.FC = () => {
  const { t } = useTranslate();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>{t('success')}</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        {t('passChange')}
      </p>
      <RedButton className='text-white w-full py-2 mt-7' name={t('goToFeed')} />
    </div>
  );
};

export default SuccessPasswordChange;
