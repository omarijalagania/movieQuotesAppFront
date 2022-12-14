import { useFormik } from 'formik';
import { getQuoteFormInitialValue, useHeader } from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { addQuoteHandler, getAllMoviesHandler } from 'services';
import { useTranslate, useMediaSize } from 'hooks';
import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onModalClose } from 'state';

export const useAddQuote = () => {
  const [file, setFile] = useState<File | null>(null);
  const { userId, userDetails } = useHeader();
  const [movies, setMovies] = useState([]);
  const [selectMovies, setSelectMovies] = useState('');
  const { t } = useTranslate();
  const dispatch = useDispatch();
  const width = useMediaSize();
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectMovies(event.target.value);
  };

  const newMovie = movies.map(
    (movie: {
      movieNameEn: string;
      _id: string;
      value: string;
      label: string;
    }) => ({
      value: movie._id,
      label: movie.movieNameEn,
    })
  );

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await getAllMoviesHandler(userId);
      setMovies(response.data);
    };

    if (userId !== '') {
      getAllMovies();
    }
  }, [userId]);

  const formik = useFormik({
    initialValues: getQuoteFormInitialValue(),

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('quoteNameEng', values.quoteNameEng);
      formData.append('quoteNameGe', values.quoteNameGe);
      formData.append('movieId', selectMovies);
      formData.append('poster', file as File);
      formData.append('userId', userId);

      try {
        if (file) {
          const response = await addQuoteHandler(formData as FormData);
          if (response.status === 200 || response.status === 201) {
            toast.success(t('quoteAdded'));
            dispatch(onModalClose(true));
          }
          if (response.status === 422) {
            toast.error(t('addingError'));
            dispatch(onModalClose(true));
          }
        }
      } catch (error) {
        toast.error(t('serverError'));
        dispatch(onModalClose(false));
      }
    },

    validationSchema: quoteSchema,
  });

  return {
    formik,
    t,
    setFile,
    newMovie,
    handleChange,
    userDetails,
    file,
    width,
  };
};
