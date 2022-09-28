import { useFormik } from 'formik';
import { getFormInitialValue } from 'components';
import { useTranslate } from 'hooks';
import { RegisterSchema } from 'schema';
import { registerHandler } from 'services';
import { saveRegisterResponse } from 'state';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export const usePersonalInformationForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: getFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        repeatPassword: values.repeatPassword,
        poster: '',
      };

      try {
        const response = await registerHandler(data);
        dispatch(saveRegisterResponse(response));
        console.log(response);
        formik.resetForm();
      } catch (error: any) {
        if (error.response.data === 'User already exists') {
          setError(t('userExists'));
          return;
        }
        setError('wrongCreds');
      }
    },

    validationSchema: RegisterSchema,
  });

  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, formik.values.userName, setError]);

  return { formik, error, t };
};
