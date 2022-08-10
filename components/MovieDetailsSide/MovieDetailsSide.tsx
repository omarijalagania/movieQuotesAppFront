import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDeleteDialog, RootState } from 'state';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { DeleteMovieDialog, Modal, MovieEditDialog } from 'components';
import { deleteMovieHandler } from 'services';
import { useTranslate } from 'hooks';
import { toast } from 'react-toastify';

const MovieDetailsSide = () => {
  const { router } = useTranslate();
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const isDelete = useSelector((state: RootState) => state.quotes.isDelete);
  const dispatch = useDispatch();

  const deleteMovie = async (id: string) => {
    setOpenDeleteDialog(true);
    if (isDelete) {
      setOpenDeleteDialog(false);
      try {
        const response = await deleteMovieHandler(id);
        if (response.status === 200) {
          router.push('/feed/movies');
          dispatch(isDeleteDialog(false));
        }
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
  };

  const renderGenres = () => {
    return movie?.genre?.map((genre: { genre: string; label: string }) => (
      <p
        key={genre.label + Math.random()}
        className='text-xs w-12 h-6 px-10 flex justify-center items-center bg-gray-500'
      >
        {genre.label}
      </p>
    ));
  };

  return (
    <div className='mt-10 space-y-6 flex flex-col justify-start'>
      <div className='flex justify-between items-center'>
        <h2 className='text-primaryGold text-3xl'> {movie.movieNameEn}</h2>
        <div className='flex'>
          <PencilIcon
            onClick={() => setOpenEditDialog(true)}
            className='w-5 h-5 text-white'
          />
          <TrashIcon
            onClick={() => deleteMovie(movie._id)}
            className='w-5 h-5 ml-2 cursor-pointer text-white'
          />
        </div>
      </div>
      <div className='flex space-x-2'>{renderGenres()}</div>
      <p className='text-xs'>Director: {movie.directorEn}</p>
      <p className='text-xs'>{movie.descriptionEn}</p>
      {openDeleteDialog && (
        <Modal open={openDeleteDialog} setOpen={setOpenDeleteDialog}>
          <DeleteMovieDialog />
        </Modal>
      )}
      {openEditDialog && (
        <Modal open={openEditDialog} setOpen={setOpenEditDialog}>
          <MovieEditDialog />
        </Modal>
      )}
    </div>
  );
};

export default MovieDetailsSide;
