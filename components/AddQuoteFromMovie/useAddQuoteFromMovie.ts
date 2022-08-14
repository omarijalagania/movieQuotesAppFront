import { useFormik } from 'formik';
import { getQuoteFormInitialValue, useHeader } from 'components';
import { quoteSchema } from 'schema';
import { toast } from 'react-toastify';
import { addQuoteHandler } from 'services';
import { useTranslate } from 'hooks';
import { useState } from 'react';

export const useAddQuoteFromMovie = () => {
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

  return { formik, t, setFile, setSelectMovies };
};
