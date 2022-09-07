import { RedButton, openInNewTab } from 'components';
import React from 'react';
import Image from 'next/image';
import { useTranslate } from 'hooks';

const CheckEmail: React.FC = () => {
  const { t } = useTranslate();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>{t('checkMail')}</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        {t('checkMailText')}
      </p>
      <RedButton
        onClick={() => openInNewTab('https://mail.google.com')}
        className='text-white w-full py-2 mt-7'
        name={t('checkMailButton')}
      />

      <p className='text-gray-500 mt-10'>{t('skip')}</p>
    </div>
  );
};

export default CheckEmail;
