import { useFormik } from 'formik';
import { getMovieFormInitialValue } from 'components';
import { movieSchema } from 'schema';
//import { useDispatch } from 'react-redux';
import { useTranslate } from 'hooks';

export const useAddMovie = () => {
  //const dispatch = useDispatch();
  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: getMovieFormInitialValue(),
    onSubmit: async (values) => {
      console.log(values);
      try {
        //send data to server
      } catch (error) {
        throw error;
      }
    },

    validationSchema: movieSchema,
  });

  return { formik, t };
};
