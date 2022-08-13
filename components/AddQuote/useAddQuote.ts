import { useFormik } from 'formik';
import { getQuoteFormInitialValue, useHeader } from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { addQuoteHandler, getAllMoviesHandler } from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';

export const useAddQuote = () => {
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useHeader();
  const [movies, setMovies] = useState([]);
  const [selectMovies, setSelectMovies] = useState('');

  const handleChange = (event: { target: { value: any } }) => {
    setSelectMovies(event.target.value);
  };

  const newMovie = movies.map(
    (movie: { movieNameEn: any; _id: any; value: string; label: string }) => ({
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

  const { t } = useTranslate();
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
        const response = await addQuoteHandler(formData as any);

        if (response.status === 422) {
          toast.error('Error');
        }
        if (response.status === 200) {
          toast.success('Movie added');
        }
      } catch (error) {
        toast.error('Error');
      }
    },

    validationSchema: quoteSchema,
  });

  return { formik, t, setFile, newMovie, handleChange };
};
