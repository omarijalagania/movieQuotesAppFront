import { RedButton } from 'components/shared';
import React from 'react';
import { useTranslate } from 'hooks';

const Forbidden: React.FC = () => {
  const { t, router } = useTranslate();
  return (
    <div className='h-screen w-72 md:w-full mx-auto flex flex-col items-center mt-44'>
      <img
        className='w-[240px] h-[200px]'
        src='/assets/gendalf.png'
        alt='forbidden'
      />
      <h1 className='text-white text-center text-3xl md:text-4xl mb-4 md:mb-2'>
        {t('shallPass')}
      </h1>

      <p className='text-white text-center mb-10'>{t('noAccess')}</p>

      <RedButton
        onClick={() => router.push('/')}
        className='text-white'
        name={t('homeReturn')}
      />
    </div>
  );
};

export default Forbidden;
