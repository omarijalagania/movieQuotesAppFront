import { useFormik } from 'formik';
import { getMovieFormInitialValue, useHeader } from 'components';
import { movieSchema } from 'schema';
import { toast } from 'react-toastify';
import { addMovieHandler, getMovieGenresHandler } from 'services';
import { useTranslate, useMediaSize } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAddMovie } from 'state';

export const useAddMovie = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectError, setSelectError] = useState(false);
  const { userId, userDetails } = useHeader();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const width = useMediaSize();

  const dispatch = useDispatch();

  const handleChange = (selectedOption: any) => {
    setSelectError(false);
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

  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: getMovieFormInitialValue(),

    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('movieNameGe', values.movieNameGe);
      formData.append('movieNameEn', values.movieNameEn);
      formData.append('genre', JSON.stringify(selectedGenres));
      formData.append('directorGe', values.directorGe);
      formData.append('directorEn', values.directorEn);
      formData.append('descriptionGe', values.descriptionGe);
      formData.append('descriptionEn', values.descriptionEn);
      formData.append('poster', file as File);
      formData.append('userId', userId);

      try {
        if (file) {
          const response = await addMovieHandler(formData);
          dispatch(saveAddMovie(response));
          if (response.status === 200 || response.status === 201) {
            toast.success(t('successMovieAdd'));
          }
          if (response.status === 422) {
            toast.error(t('movieAddError'));
          }
        }
      } catch (error) {
        toast.error(t('serverError'));
      }
    },

    validationSchema: movieSchema,
  });

  useEffect(() => {
    if (JSON.stringify(formik.errors) === '{}' || newGenre.length === 0) {
      setSelectError(false);
    } else {
      setSelectError(true);
    }
  }, [formik.errors, newGenre.length]);

  return {
    formik,
    t,
    setFile,
    newGenre,
    handleChange,
    selectedGenres,
    userDetails,
    file,
    selectError,
    width,
  };
};
