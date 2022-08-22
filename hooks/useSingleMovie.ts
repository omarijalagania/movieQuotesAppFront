import { useEffect } from 'react';
import { getSingleMovieHandler } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, saveSingleMovie } from 'state';

const useSingleMovie = (id: string) => {
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  const closeModal = useSelector((state: RootState) => state.quotes.closeModal);
  useEffect(() => {
    try {
      const getOneMovie = async () => {
        const response = await getSingleMovieHandler(id);
        dispatch(saveSingleMovie(response.data));
      };
      if (id !== '') {
        getOneMovie();
      }
    } catch (error) {}
  }, [dispatch, id, closeModal]);

  return {
    movie,
  };
};

export default useSingleMovie;
