import { useFormik } from 'formik';
import { getRecoverFormInitialValue } from 'components';
import { passwordRecoverSchema } from 'schema';

export const useRecoverForm = () => {
  const formik = useFormik({
    initialValues: getRecoverFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        email: values.email,
      };

      try {
        console.log(data);
        //recover request
      } catch (error) {
        throw error;
      }
    },

    validationSchema: passwordRecoverSchema,
  });

  return { formik };
};
