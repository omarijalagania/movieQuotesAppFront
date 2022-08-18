import { useTranslate } from 'hooks';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteMovieHandler } from 'services';
import { RootState } from 'state';

const useMovieDetailsSide = () => {
  const { router, t } = useTranslate();
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const deleteMovie = async (id: string) => {
    try {
      const response = await deleteMovieHandler(id);
      if (response.status === 200) {
        router.push('/feed/movies');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return { movie, openEditDialog, setOpenEditDialog, deleteMovie, t };
};

export default useMovieDetailsSide;
