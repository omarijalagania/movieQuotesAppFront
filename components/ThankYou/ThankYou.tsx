import { RedButton, openInNewTab } from 'components';
import React from 'react';
import Image from 'next/image';
import { useTranslate } from 'hooks';

const ThankYou: React.FC = () => {
  const { t } = useTranslate();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>{t('thankYou')}</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        {t('checkEmail')}
      </p>
      <RedButton
        onClick={() => openInNewTab('https://mail.google.com')}
        className='text-white mt-7'
        name={t('checkMailButton')}
      />
    </div>
  );
};

export default ThankYou;
