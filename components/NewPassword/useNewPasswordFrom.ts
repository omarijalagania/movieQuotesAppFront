import { useFormik } from 'formik';
import { getPasswordsFormInitialValue } from 'components';
import { newPasswordSchema } from 'schema';
import { newUserPasswordHandler } from 'services';
import { useDispatch } from 'react-redux';
import { saveNewPasswordResponse } from 'state';

export const useNewPasswordFrom = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const formik = useFormik({
    initialValues: getPasswordsFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        password: values.password,
        repeatPassword: values.repeatPassword,
        token: token,
      };
      try {
        const response = await newUserPasswordHandler(data);
        dispatch(saveNewPasswordResponse(response));
      } catch (error) {
        throw error;
      }
    },

    validationSchema: newPasswordSchema,
  });

  return { formik };
};
