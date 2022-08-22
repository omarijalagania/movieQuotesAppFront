import React from 'react';
import Image from 'next/image';
import { ChatIcon } from '@heroicons/react/outline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AddMovie, Modal, RedButton } from 'components';
import { useMovie } from 'hooks';

const Movies: React.FC = () => {
  const { movie, openAddMovieModal, setOpenAddMovieModal, router, t } =
    useMovie();

  const renderMovies = () => {
    return movie?.map(
      (item: {
        quotes: string[];
        poster: string;
        movieNameEn: string;
        _id: string;
      }) => (
        <div
          className='cursor-pointer'
          onClick={() => router.push(`/feed/movies/${item._id}`)}
          key={item._id}
        >
          <Image
            className='rounded-lg object-cover'
            width={450}
            height={350}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.poster}`}
            alt='movie'
          />
          <p className='text-white mt-3 text-xl'>{item.movieNameEn}</p>
          <div className='flex items-center mt-4'>
            <div className='text-white'>{item.quotes.length}</div>
            <ChatIcon className='w-8 h-8 text-white ml-3' />
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div className='flex justify-between  text-white mb-5'>
        <p>
          {t('myMovieList')} ({movie.length})
        </p>
        <div className='flex items-center'>
          <p>{t('search')}</p>
          <RedButton
            onClick={() => setOpenAddMovieModal(true)}
            className='ml-3'
            name={t('addMovie')}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {renderMovies()}
      </div>
      {openAddMovieModal && (
        <Modal open={openAddMovieModal} setOpen={setOpenAddMovieModal}>
          <AddMovie />
        </Modal>
      )}
    </>
  );
};

export default Movies;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
