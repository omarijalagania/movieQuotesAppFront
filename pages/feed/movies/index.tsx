import React from 'react';
import Image from 'next/image';
import { ChatIcon } from '@heroicons/react/outline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AddMovie, Loader, Modal, RedButton } from 'components';
import { useMovie } from 'hooks';
import Head from 'next/head';
import { SearchIcon } from '@heroicons/react/solid';

const Movies: React.FC = () => {
  const {
    movie,
    openAddMovieModal,
    setOpenAddMovieModal,
    router,
    t,
    handleSearch,
  } = useMovie();

  if (movie === null || movie === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-between w-full md:w-[1420px] mt-12 text-white mb-5'>
        <p>
          {t('myMovieList')} ({movie.length})
        </p>
        <div className='flex items-center'>
          <div
            className={` cursor-pointer md:h-[50px] transition-all text-gray-300 w-[75px] md:w-[150px] md:flex  items-center`}
          >
            <div className='flex transition-all  items-center'>
              <SearchIcon className='w-5 h-5  text-gray-300' />
              <input
                className={`ml-2 bg-transparent md:h-[50px] outline-none w-full`}
                id='search'
                name='search'
                placeholder={t('searchBy')}
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
          <RedButton
            onClick={() => setOpenAddMovieModal(true)}
            className='ml-3 !py-1'
            name={t('addMovie')}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:w-[1420px] md:grid-cols-3 '>
        {movie.length !== 0 ? (
          movie?.map(
            (item: {
              quotes: string[];
              poster: string;
              movieNameEn: string;
              _id: string;
            }) => (
              <div
                className='cursor-pointer w-full md:w-[440px]'
                onClick={() => router.push(`/feed/movies/${item._id}`)}
                key={item._id}
              >
                <Image
                  className='rounded-lg object-cover'
                  width={440}
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
          )
        ) : (
          <p className='text-white  text-3xl'>{t('noMovies')}</p>
        )}
      </div>
      {openAddMovieModal && (
        <Modal
          dialogClass='!bg-darkBlue !p-10 '
          open={openAddMovieModal}
          setOpen={setOpenAddMovieModal}
        >
          <AddMovie setOpenAddMovieModal={setOpenAddMovieModal} />
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
