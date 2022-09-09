import React, { useState } from 'react';
import { useTranslate, useSingleMovie } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import {
  AddQuoteFromMovie,
  Modal,
  QuoteMovieDetails,
  RedButton,
} from 'components';
import { QuoteProps } from 'types';

const MovieDetails: React.FC = () => {
  const { router, t } = useTranslate();
  const { id } = router.query;
  const [openAddQuoteDialog, setOpenAddQuoteDialog] = useState(false);
  const { movie } = useSingleMovie(id as string);

  return (
    <div className='text-white w-full'>
      <h3>{t('movieDesc')}</h3>
      <div className='mt-3 w-full'>
        <Image
          className='rounded-lg object-cover'
          width={1100}
          height={800}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${movie?.poster}`}
          alt={movie?.movieNameEn}
        />
      </div>
      {openAddQuoteDialog && (
        <Modal open={openAddQuoteDialog} setOpen={setOpenAddQuoteDialog}>
          <AddQuoteFromMovie
            setOpenAddQuoteDialog={setOpenAddQuoteDialog}
            movie={movie}
            _id={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </Modal>
      )}
      <div className='flex mt-7 items-center'>
        <p className='border-r-[1px] border-gray-500 px-3'>
          {t('quote')} ({t('total')} {movie?.quotes?.length})
        </p>
        <RedButton
          onClick={() => setOpenAddQuoteDialog(true)}
          className='ml-3'
          name={t('addQuote')}
        />
      </div>
      {movie?.quotes?.map((item: QuoteProps) => (
        <QuoteMovieDetails item={item} key={item._id} />
      ))}
    </div>
  );
};

export default MovieDetails;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
