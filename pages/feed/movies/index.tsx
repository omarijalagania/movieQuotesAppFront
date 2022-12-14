import React from 'react';
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
    <div className='h-screen'>
      <Head>
        <title>Movies</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-between items-center  w-full md:w-[72vw]  mt-12 text-white mb-5'>
        <p className='md:text-2xl'>
          {t('myMovieList')} ({movie.length})
        </p>
        <div className='flex  items-center'>
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
      <div className='grid grid-cols-1 md:w-[72vw] gap-1 md:grid-cols-2 xl:grid-cols-3 '>
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
                <img
                  className='rounded-lg w-[27.5rem] h-[21.87rem] md:w-[20.5rem] md:h-[14.87rem] xl:w-[27.5rem] xl:h-[21.87rem]  object-cover'
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
    </div>
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
