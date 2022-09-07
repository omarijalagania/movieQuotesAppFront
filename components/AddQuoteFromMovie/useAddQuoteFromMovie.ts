import { useFormik } from 'formik';
import {
  getQuoteFormInitialValue,
  useHeader,
  SingleMovieProps,
} from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { addQuoteHandler } from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';

export const useAddQuoteFromMovie = (movie: SingleMovieProps) => {
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useHeader();

  const [selectMovies, setSelectMovies] = useState('');

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
        const response = await addQuoteHandler(formData as FormData);

        if (response.status === 422) {
          toast.error('Error adding quote');
        }
      } catch (error) {
        toast.error('Server Error');
      }
    },

    validationSchema: quoteSchema,
  });

  useEffect(() => {
    setSelectMovies(movie._id);
  }, [movie._id]);

  return { formik, t, setFile, setSelectMovies, file };
};
