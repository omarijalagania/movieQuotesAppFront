import { useState, useRef } from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import {
  getRegularUserFormInitialValue,
  getRegularUserFullFormInitialValue,
  InputArrayProps,
} from 'components';
import { userProfileSchema } from 'schema';
import { useHeader } from 'components';
import { useTranslate } from 'hooks';

const useRegularUserProfile = () => {
  const [inputsArray, setInputsArray] = useState([] as InputArrayProps[]);
  const [file, setFile] = useState(null as File | null);
  const hiddenFileInput = useRef(null);

  const { userDetails } = useHeader();
  const { t } = useTranslate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      getRegularUserFullFormInitialValue(userDetails) ||
      getRegularUserFormInitialValue(),

    onSubmit: async (values) => {
      console.log(values);
      const data = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        secondaryEmail: values.secondaryEmails,
      };
      try {
        //call
      } catch (error) {
        //catch errors
      }
    },

    validationSchema: userProfileSchema,
  });

  return {
    formik,
    userDetails,
    t,
    inputsArray,
    setInputsArray,
    setFile,
    file,
    hiddenFileInput,
    FieldArray,
    FormikProvider,
  };
};

export default useRegularUserProfile;
