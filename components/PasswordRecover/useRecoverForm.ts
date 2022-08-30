import { useFormik } from 'formik';
import { getRecoverFormInitialValue } from 'components';
import { passwordRecoverSchema } from 'schema';
import { userRecoverHandler } from 'services';
import { useDispatch } from 'react-redux';
import { savePasswordRecoveryResponse } from 'state';
import { useState, useEffect } from 'react';
import { useTranslate } from 'hooks';
export const useRecoverForm = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { t, router } = useTranslate();
  const formik = useFormik({
    initialValues: getRecoverFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        email: values.email,
      };

      try {
        const response = await userRecoverHandler(data);
        dispatch(savePasswordRecoveryResponse(response));
      } catch (error) {
        setError('emailNotFound');
      }
    },

    validationSchema: passwordRecoverSchema,
  });

  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, setError]);

  return { formik, error, t, router };
};
