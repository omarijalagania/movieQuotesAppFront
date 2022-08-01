import { useFormik } from 'formik';
import { getPasswordsFormInitialValue } from 'components';
import { newPasswordSchema } from 'schema';
import { newUserPasswordHandler } from 'services';
import { useDispatch } from 'react-redux';
import { saveNewPasswordResponse } from 'state';

export const useNewPasswordFrom = () => {
  const dispatch = useDispatch();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU1MWMyMzNiYWZlMzhjZDllNGZhODgiLCJuYW1lIjoib21hcmkiLCJpYXQiOjE2NTkzNjcwMDV9.gzY3qymqEwnDDhrCFiG80YGrt78wQb94H0NOXcAr1Q4';
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
        console.log(response);
        dispatch(saveNewPasswordResponse(response));
      } catch (error) {
        throw error;
      }
    },

    validationSchema: newPasswordSchema,
  });

  return { formik };
};
