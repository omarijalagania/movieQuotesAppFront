import { useFormik } from 'formik';
import { movieSchema } from 'schema';
import { toast } from 'react-toastify';
import { getMovieGenresHandler, updateMovieHandler } from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import {
  editMovieFormInitialValue,
  emptyMovieFormInitialValue,
  useHeader,
  imageUrl,
} from 'components';

export const useEditMovie = () => {
  const [file, setFile] = useState<File | null>(null);
  const { userId, userDetails } = useHeader();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  const { router, t } = useTranslate();

  const handleChange = (selectedOption: any) => {
    const selectedGenresVal = selectedOption.map(
      (option: { value: string; label: string }) => ({
        genre: option.value,
        label: option.label,
      })
    );
    setSelectedGenres(selectedGenresVal);
  };

  const newGenre = genres.map((genre: { genre: string; label: string }) => ({
    value: genre.genre,
    label: genre.label,
  }));

  const defaultSelects = movie?.genre?.map(
    (genre: { genre: string; label: string }) => ({
      value: genre.genre,
      label: genre.label,
    })
  );

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getMovieGenresHandler();
        setGenres(response.data);
      } catch (error) {
        toast.error('Server Error');
      }
    };
    getGenres();
  }, []);
  const posterUrl = imageUrl(file as File);

  const formik = useFormik({
    initialValues: movie
      ? editMovieFormInitialValue(movie)
      : emptyMovieFormInitialValue(),

    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('movieNameGe', values.movieNameGe);
      formData.append('movieNameEn', values.movieNameEn);
      formData.append(
        'genre',
        JSON.stringify(
          selectedGenres.length > 0 ? selectedGenres : values.genre
        )
      );
      formData.append('directorGe', values.directorGe);
      formData.append('directorEn', values.directorEn);
      formData.append('descriptionGe', values.descriptionGe);
      formData.append('descriptionEn', values.descriptionEn);
      formData.append('poster', file as File);
      formData.append('userId', userId);

      try {
        const response = await updateMovieHandler(
          formData,
          movie?._id as string
        );

        if (response.status === 422) {
          toast.error('Error');
        }
        if (response.status === 200) {
          toast.success('Movie edited');

          router.push('/feed/movies');
        }
      } catch (error) {
        toast.error('Error');
      }
    },

    validationSchema: movieSchema,
  });

  return {
    formik,
    t,
    setFile,
    file,
    posterUrl,
    newGenre,
    handleChange,
    selectedGenres,
    defaultSelects,
    movie,
    userDetails,
  };
};
