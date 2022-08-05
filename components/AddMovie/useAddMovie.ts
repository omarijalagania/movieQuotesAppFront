import { useFormik } from 'formik';
import { getMovieFormInitialValue } from 'components';
import { movieSchema } from 'schema';

import { useTranslate } from 'hooks';

export const useAddMovie = () => {
  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: getMovieFormInitialValue(),
    onSubmit: async (values) => {
      console.log(values);
      try {
      } catch (error) {
        throw error;
      }
    },

    validationSchema: movieSchema,
  });

  return { formik, t };
};
