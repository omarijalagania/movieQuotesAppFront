import { RedButton } from 'components';
import React from 'react';
import { useTranslate } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const NotFound = () => {
  const { t, router } = useTranslate();
  return (
    <div className='h-screen w-72 md:w-full mx-auto flex flex-col items-center mt-44'>
      <img
        className='w-[180px] h-[200px]'
        src='/assets/ghost.png'
        alt='notFound'
      />
      <h1 className='text-white text-center text-3xl md:text-4xl mb-4 md:mb-2'>
        {t('shallPass')}
      </h1>

      <p className='text-white text-center mb-10'>{t('cantSee')}</p>

      <RedButton
        onClick={() => router.push('/')}
        className='text-white'
        name={t('homeReturn')}
      />
    </div>
  );
};

export default NotFound;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
