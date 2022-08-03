import { useFormik } from 'formik';
import { getRecoverFormInitialValue } from 'components';
import { passwordRecoverSchema } from 'schema';
import { userRecoverHandler } from 'services';
import { useDispatch } from 'react-redux';
import { savePasswordRecoveryResponse } from 'state';
import { useState } from 'react';

export const useRecoverForm = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
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

  return { formik, error, setError };
};
