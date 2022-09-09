import React from 'react';

import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Modal, MovieEditDialog, useMovieDetailsSide } from 'components';

const MovieDetailsSide: React.FC = () => {
  const { movie, openEditDialog, setOpenEditDialog, deleteMovie, t } =
    useMovieDetailsSide();

  return (
    <div className='mt-10 space-y-6 flex flex-col justify-start'>
      <div className='flex justify-between items-center'>
        <h2 className='text-primaryGold text-3xl'> {movie?.movieNameEn}</h2>
        <div className='flex'>
          <PencilIcon
            onClick={() => setOpenEditDialog(true)}
            className='w-5 h-5 cursor-pointer text-white'
          />
          <TrashIcon
            onClick={() => deleteMovie(movie?._id)}
            className='w-5 h-5 ml-2 cursor-pointer text-white'
          />
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
        {t('director')}: {movie.directorEn}
      </p>
      <p className='text-xs'>{movie.descriptionEn}</p>

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
