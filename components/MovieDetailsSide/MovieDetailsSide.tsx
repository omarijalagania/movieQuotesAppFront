import React from 'react';

import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Modal, MovieEditDialog, useMovieDetailsSide } from 'components';

const MovieDetailsSide: React.FC = () => {
  const { movie, openEditDialog, setOpenEditDialog, deleteMovie, t, router } =
    useMovieDetailsSide();

  return (
    <div className='mt-10 space-y-6 flex flex-col justify-start'>
      <div className='flex justify-between items-center'>
        <h2 className='text-primaryGold text-3xl'>
          {' '}
          {router.locale === 'en' ? movie?.movieNameEn : movie?.movieNameGe}
        </h2>
        <div className='flex relative'>
          <div className='w-[72px] h-[40px] rounded-tl-md rounded-bl-md bg-lightBlue flex justify-center items-center'>
            <PencilIcon
              onClick={() => setOpenEditDialog(true)}
              className='w-5 h-5 cursor-pointer text-white'
            />
            <div className='h-[15px] w-[1px] absolute left-1/2 bg-gray-500' />
          </div>
          <div className='w-[72px] h-[40px] rounded-tr-md rounded-br-md bg-lightBlue flex justify-center items-center'>
            <TrashIcon
              onClick={() => deleteMovie(movie?._id)}
              className='w-5 h-5 ml-2 cursor-pointer text-white'
            />
          </div>
        </div>
      </div>
      <div className='flex space-x-2'>
        {movie?.genre?.map((genre: { genre: string; label: string }) => (
          <p
            key={genre.label + Math.random()}
            className='text-xs w-12 h-6 px-10 flex justify-center items-center bg-gray-500'
          >
            {genre.label}
          </p>
        ))}
      </div>
      <p className='text-xs'>
        {t('director')}:{' '}
        {router.locale === 'en' ? movie?.directorEn : movie?.directorGe}
      </p>
      <p className='text-xs'>
        {router.locale === 'en' ? movie?.descriptionEn : movie?.descriptionGe}
      </p>

      {openEditDialog && (
        <Modal
          dialogClass='!bg-darkBlue'
          open={openEditDialog}
          setOpen={setOpenEditDialog}
        >
          <MovieEditDialog setOpenEditDialog={setOpenEditDialog} />
        </Modal>
      )}
    </div>
  );
};

export default MovieDetailsSide;
