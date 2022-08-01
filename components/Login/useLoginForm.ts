import { useFormik } from 'formik';
import { getLoginFormInitialValue } from 'components';
import { LoginSchema } from 'schema';
import { signIn } from 'next-auth/react';

export const useLoginForm = () => {
  const formik = useFormik({
    initialValues: getLoginFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      try {
        await signIn('credentials', {
          ...data,
        });
      } catch (error) {
        throw error;
      }
    },

    validationSchema: LoginSchema,
  });

  return { formik };
};
