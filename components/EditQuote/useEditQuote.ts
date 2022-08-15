import { useFormik } from 'formik';
import { getQuoteFormInitialValue, useHeader, imageUrl } from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { editQuoteHandler, getAllMoviesHandler } from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEditQuoteFormInitialValue } from './helpers';
import { onModalClose } from 'state';

export const useEditQuote = () => {
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useHeader();
  const [movies, setMovies] = useState([]);
  const [selectMovies, setSelectMovies] = useState('');
  const dispatch = useDispatch();
  const singleMovie = useSelector((state: any) => state.quotes.singleMovie);

  const handleChange = (event: { target: { value: any } }) => {
    setSelectMovies(event.target.value);
  };

  const newMovie = movies.map(
    (movie: { movieNameEn: any; _id: any; value: string; label: string }) => ({
      value: movie._id,
      label: movie.movieNameEn,
    })
  );

  const currentQuotes = singleMovie.quotes.filter(
    (quote: any) => quote.movieId === singleMovie._id
  );

  console.log(currentQuotes);

  const posterUrl = imageUrl(file as File);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await getAllMoviesHandler(userId);
      setMovies(response.data);
    };

    if (userId !== '') {
      getAllMovies();
    }
  }, [userId]);

  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: currentQuotes
      ? getEditQuoteFormInitialValue(currentQuotes)
      : getQuoteFormInitialValue(),

    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('quoteNameEng', values.quoteNameEng);
      formData.append('quoteNameGe', values.quoteNameGe);
      formData.append(
        'movieId',
        selectMovies === '' ? singleMovie._id : selectMovies
      );
      formData.append('poster', file as File);
      formData.append('userId', userId);

      try {
        const response = await editQuoteHandler(
          formData as any,
          singleMovie._id as string
        );
        if (response.status === 200 || response.status === 201) {
          toast.success(t('Quote added successfully'));
          dispatch(onModalClose(true));
        }

        if (response.status === 422) {
          toast.error('Error editing quote');
          dispatch(onModalClose(false));
        }
      } catch (error) {
        toast.error('Server Error');
        dispatch(onModalClose(false));
      }
    },

    validationSchema: quoteSchema,
  });

  return {
    formik,
    t,
    setFile,
    file,
    newMovie,
    singleMovie,
    posterUrl,
    handleChange,
    currentQuotes,
  };
};
