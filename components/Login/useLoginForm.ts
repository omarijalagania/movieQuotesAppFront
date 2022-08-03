import { useFormik } from 'formik';
import { getLoginFormInitialValue } from 'components';
import { LoginSchema } from 'schema';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslate } from 'hooks';

export const useLoginForm = () => {
  const { t } = useTranslate();
  const [error, setError] = useState('');
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

  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, setError]);

  return { formik, error, t };
};
