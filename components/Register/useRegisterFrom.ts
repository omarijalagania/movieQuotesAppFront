import { useFormik } from 'formik';
import { getFormInitialValue } from 'components';

import { RegisterSchema } from 'schema';
import { registerHandler } from 'services';
import { saveRegisterResponse } from 'state';
import { useDispatch } from 'react-redux';

export const usePersonalInformationForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: getFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        repeatPassword: values.repeatPassword,
      };
      try {
        const response = await registerHandler(data);
        dispatch(saveRegisterResponse(response));
      } catch (error) {
        throw error;
      }
    },

    validationSchema: RegisterSchema,
  });

  return { formik };
};
