import { useHeader } from 'components';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMoviesHandler } from 'services';
import { RootState } from 'state';

const useMovie = () => {
  const [movie, setMovie] = useState([]);
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const addMovieResponse = useSelector(
    (state: RootState) => state.quotes.addMovie
  );
  const closeModal = useSelector((state: RootState) => state.quotes.closeModal);
  const { userId } = useHeader();
  const { router } = useTranslate();

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await getAllMoviesHandler(userId);
      setMovie(response.data);
    };
    if (addMovieResponse.status === 200) {
      setOpenAddMovieModal(false);
    }
    if (userId !== '') {
      getAllMovies();
    }
  }, [addMovieResponse.status, userId, closeModal]);
  return { movie, openAddMovieModal, setOpenAddMovieModal, router };
};

export default useMovie;
