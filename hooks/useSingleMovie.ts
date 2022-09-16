import { useEffect, useState } from 'react';
import { getSingleMovieHandler } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, saveSingleMovie } from 'state';

const useSingleMovie = (id: string) => {
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  const [refreshQuote, setRefreshQuote] = useState(false);
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
  }, [dispatch, id, refreshQuote, closeModal]);

  useEffect(() => {
    if (refreshQuote) {
      setRefreshQuote(false);
    }
  }, [refreshQuote]);

  return {
    movie,
    setRefreshQuote,
  };
};

export default useSingleMovie;
