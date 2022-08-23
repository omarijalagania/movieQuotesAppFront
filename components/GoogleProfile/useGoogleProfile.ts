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
import { updateGoogleUserHandler } from 'services';
import { toast } from 'react-toastify';

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
      };
      try {
        const response = await updateGoogleUserHandler(
          data,
          userDetails?._id as string
        );

        if (response.status === 200) {
          setIsEditable(false);
          toast.success(t('updated'));
        }
      } catch (error) {
        toast.error(t('error'));
      }
    },

    validationSchema: googleSchema,
  });

  return { userDetails, t, formik, isEditable, setIsEditable };
};

export default useGoogleProfile;
