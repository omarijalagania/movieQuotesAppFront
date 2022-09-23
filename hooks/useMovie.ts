import { useHeader, useOutsideSearch, useSearch } from 'components';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMoviesHandler } from 'services';
import { RootState } from 'state';

const useMovie = () => {
  const { handleClickOutside } = useSearch();

  const [movie, setMovie] = useState([]);
  const [backupMovie, setBackupMovie] = useState([]);
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const addMovieResponse = useSelector(
    (state: RootState) => state.quotes.addMovie
  );
  const closeModal = useSelector((state: RootState) => state.quotes.closeModal);
  const ref = useOutsideSearch(handleClickOutside);

  const { userId } = useHeader();
  const { router, t } = useTranslate();

  const handleSearch = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.currentTarget.value);
  };

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await getAllMoviesHandler(userId);
      if (response.status === 201) {
        setOpenAddMovieModal(false);
      }
      setMovie(response.data);
      setBackupMovie(response.data);
    };
    if (addMovieResponse.status === 200) {
      setOpenAddMovieModal(false);
    }
    if (userId !== '') {
      getAllMovies();
    }
  }, [addMovieResponse.status, userId, closeModal]);

  useEffect(() => {
    const filteredMovie = backupMovie.filter(
      (item: { movieNameEn: string; movieNameGe: string }) =>
        item?.movieNameEn.includes(searchTerm) ||
        item?.movieNameGe.includes(searchTerm)
    );

    setMovie(filteredMovie);
  }, [backupMovie, searchTerm]);

  return {
    movie,
    openAddMovieModal,
    setOpenAddMovieModal,
    router,
    t,
    ref,
    handleSearch,
  };
};

export default useMovie;
