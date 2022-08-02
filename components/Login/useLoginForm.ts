import { useFormik } from 'formik';
import { getLoginFormInitialValue } from 'components';
import { LoginSchema } from 'schema';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const useLoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: getLoginFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await signIn('credentials', {
          redirect: false,
          ...data,
        });
        if (response?.status === 200) {
          router.push('/test');
        } else {
          throw new Error('wrong email or password');
        }
      } catch (error) {
        throw error;
      }
    },

    validationSchema: LoginSchema,
  });

  return { formik };
};
