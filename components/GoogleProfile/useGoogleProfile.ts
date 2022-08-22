import { useFormik } from 'formik';
import {
  getGoogleFormInitialValue,
  useHeader,
  getGoogleEmptyFormInitialValue,
  UserProps,
} from 'components';
import { googleSchema } from 'schema';
import { useTranslate } from 'hooks';
import { useState } from 'react';

const useGoogleProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { userDetails } = useHeader();
  const { t } = useTranslate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      getGoogleFormInitialValue(userDetails as UserProps) ||
      getGoogleEmptyFormInitialValue(),

    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        email: values.email,
      };
      try {
        //call
      } catch (error) {
        //errors
      }
    },

    validationSchema: googleSchema,
  });

  return { userDetails, t, formik, isEditable, setIsEditable };
};

export default useGoogleProfile;
