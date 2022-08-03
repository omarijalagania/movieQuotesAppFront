import { useFormik } from 'formik';
import { getLoginFormInitialValue } from 'components';
import { LoginSchema } from 'schema';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useLoginForm = () => {
  const [error, setError] = useState('');
  console.log(error);
  const router = useRouter();
  const formik = useFormik({
    initialValues: getLoginFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await signIn(
          'credentials',

          {
            redirect: false,

            ...data,
          }
        );

        if (response?.status === 200) {
          router.push('/test');
        } else {
          setError('wrongCreds');
        }
      } catch (error) {
        setError('wrongCreds');
      }
    },

    validationSchema: LoginSchema,
  });

  return { formik, error, setError };
};
