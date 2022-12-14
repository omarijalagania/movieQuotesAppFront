import { useFormik } from 'formik';
import {
  getQuoteFormInitialValue,
  useHeader,
  SingleMovieProps,
} from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { addQuoteHandler } from 'services';
import { useTranslate, useMediaSize } from 'hooks';
import React, { useEffect, useState } from 'react';

export const useAddQuoteFromMovie = (
  movie: SingleMovieProps,
  setOpenAddQuoteDialog: React.Dispatch<React.SetStateAction<boolean>>,
  setRefreshQuote: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useHeader();
  const [selectMovies, setSelectMovies] = useState('');
  const { t } = useTranslate();
  const width = useMediaSize();

  const formik = useFormik({
    initialValues: getQuoteFormInitialValue(),

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('quoteNameEng', values.quoteNameEng);
      formData.append('quoteNameGe', values.quoteNameGe);
      formData.append('movieId', selectMovies);
      formData.append('poster', file as File);
      formData.append('userId', userId);
      setOpenAddQuoteDialog(false);
      try {
        const response = await addQuoteHandler(formData as FormData);
        if (response.status === 200) {
          setRefreshQuote(true);
        }
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

  return { formik, t, setFile, setSelectMovies, file, width };
};
